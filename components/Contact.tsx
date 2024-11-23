// components/Contact.js
"use client";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    error: null,
    success: false,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
      }

      setStatus({ loading: false, error: null, success: true });
      setFormData({ firstName: "", lastName: "", email: "", message: "" });

      // Reset success message after 5 seconds
      // setTimeout(() => {
      //   setStatus((prev) => ({ ...prev, success: false }));
      // }, 5000);
      toast("Message sent successfully!", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } catch (error) {
      setStatus({
        loading: false,
        error: error.message,
        success: false,
      });
      toast("Message sent successfully!", {
        icon: "❌",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  return (
    <section
      className="flex flex-col items-center min-h-[70vh] bg-[#111827] p-10"
      style={{
        background: `
        repeating-linear-gradient(
          0deg,
          rgba(255, 255, 255, 0.045) 0px,
          rgba(255, 255, 255, 0.045) 2px,
          transparent 2px,
          transparent 18px
        ),
        repeating-linear-gradient(
          90deg,
          rgba(255, 255, 255, 0.045) 0px,
          rgba(255, 255, 255, 0.045) 2px,
          transparent 2px,
          transparent 18px
        )
      `,
      }}
    >
      <Toaster />
      <div className="max-w-lg w-full p-8 bg-slate-800 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-white mb-4">
          Contact Me
        </h1>
        <p className="text-center text-gray-400 mb-8">
          Please contact me directly at{" "}
          <a
            href="mailto:sagarmanchakatla01@gmail.com"
            className="text-blue-300 underline"
          >
            sagarmanchakatla01@gmail.com{" "}
          </a>{" "}
          or through this form.
        </p>

        {/* {status.error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500 text-red-500 rounded-md">
            {status.error}
          </div>
        )} */}

        {/* {status.success && (
          <div className="mb-4 p-3 bg-green-500/10 border border-green-500 text-green-500 rounded-md">
            Message sent successfully!
          </div>
        )} */}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-gray-400 mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                className="w-full p-2 bg-slate-700 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-400 mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                className="w-full p-2 bg-slate-700 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-2 bg-slate-700 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows="4"
              className="w-full p-2 bg-slate-700 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            disabled={status.loading}
            className="w-full py-2 bg-[#0E78F9] text-white font-semibold rounded-md hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status.loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
