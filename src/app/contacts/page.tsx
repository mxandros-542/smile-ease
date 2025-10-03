import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border p-3 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border p-3 rounded"
        />
        <textarea
          placeholder="Your Message"
          className="border p-3 rounded"
          rows={5}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
