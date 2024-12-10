import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  // Enable CORS
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  // Handle OPTIONS preflight request
  if (request.method === "OPTIONS") {
    return new NextResponse(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  console.log("Contact route reached");

  try {
    // Parse request body
    const body = await request.json();
    console.log("Received body:", body);

    const { firstName, lastName, email, message } = body;

    // Validate inputs
    if (!firstName || !lastName || !email || !message) {
      console.error("Missing required fields", body);
      return NextResponse.json(
        { message: "Missing required fields" },
        {
          status: 400,
          headers: corsHeaders,
        }
      );
    }

    // Verify environment variables
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      console.error("Missing Gmail credentials");
      return NextResponse.json(
        { message: "Server configuration error" },
        {
          status: 500,
          headers: corsHeaders,
        }
      );
    }

    // Create transporter with more detailed configuration
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // use TLS
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
      logger: true, // Enable logging
      debug: true, // Show debug output
    });

    // Verify transporter connection
    await new Promise((resolve, reject) => {
      transporter.verify((error, success) => {
        if (error) {
          console.error("Transporter verification failed:", error);
          reject(error);
        } else {
          console.log("Transporter is ready to send emails");
          resolve(success);
        }
      });
    });

    // Prepare email options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: "sagarmanchakatla01@gmail.com",
      subject: `Portfolio Submission from ${firstName} ${lastName}`,
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info);

    return NextResponse.json(
      { message: "Email sent successfully", info },
      {
        status: 200,
        headers: corsHeaders,
      }
    );
  } catch (error) {
    console.error("Comprehensive error in contact route:", error);

    return NextResponse.json(
      {
        message: "Error sending email",
        error: error instanceof Error ? error.message : String(error),
      },
      {
        status: 500,
        headers: corsHeaders,
      }
    );
  }
}

// Add OPTIONS handler for CORS preflight
export async function OPTIONS() {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  return new NextResponse(null, {
    status: 200,
    headers: corsHeaders,
  });
}
