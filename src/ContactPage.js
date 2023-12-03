import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission (e.g., send data to server)
    console.log('Form submitted:', formData);
    // You can reset the form data after submission if needed
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

      {/* Contact Form */}
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            rows="4"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      {/* Additional Contact Information */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Additional Information</h2>
        <p className="text-lg">
          Feel free to reach out to us via email or phone. Our team is here to assist you.
        </p>
        <p className="text-lg mt-4">
          Email: <a href="mailto:info@example.com" className="text-blue-500">info@example.com</a>
        </p>
        <p className="text-lg">
          Phone: <span className="text-blue-500">+1 (123) 456-7890</span>
        </p>
      </div>

      {/* Map (Replace the iframe URL with your own map URL) */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Visit Us</h2>
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-74.005972!3d40.712776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU5JzMwLjEiTiA3NMKwMzknMTUuOCJX!5e0!3m2!1sen!2sus!4v1620790671383!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
