"use client";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

// Define interfaces for type safety
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

interface Status {
  loading: boolean;
  error: string | null;
  success: boolean;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<Status>({
    loading: false,
    error: null,
    success: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
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

      toast("Message sent successfully!", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } catch (error) {
      // Proper type handling for error
      const errorMessage =
        error instanceof Error ? error.message : String(error);

      setStatus({
        loading: false,
        error: errorMessage,
        success: false,
      });

      toast("Failed to send message", {
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
    <section className="flex flex-col items-center min-h-[70vh]  p-10">
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
              rows={4}
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
