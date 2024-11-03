import React from "react";

const Contact = () => {
  return (
    <section
      className="flex flex-col items-center min-h-[70vh] bg-[#111827] p-10 "
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
            sagarmanchakatla01@gmail.com
          </a>{" "}
          or through this form.
        </p>

        <form className="space-y-4">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-gray-400 mb-1">First Name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full p-2 bg-slate-700 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-400 mb-1">Last Name</label>
              <input
                type="text"
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
              placeholder="Enter your email"
              className="w-full p-2 bg-slate-700 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Message</label>
            <textarea
              placeholder="Enter your message"
              rows="4"
              className="w-full p-2 bg-slate-700 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-[#0E78F9] text-white font-semibold rounded-md hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
