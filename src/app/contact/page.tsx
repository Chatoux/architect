import React from 'react';
import Image from 'next/image';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-primary text-primaryText min-h-screen flex flex-col justify-center items-center">
        <section className="w-full max-w-md mx-auto p-8 bg-secondary rounded-lg shadow-md mb-12">
          <h1 className="text-3xl font-bold text-center text-accent mb-6">
            Contact ArchiTect
          </h1>
          <p className="text-center text-sm text-primaryText mb-6">
            We&apos;d love to hear from you! Whether you have questions about our designs, pricing, or need guidance on your next project, feel free to reach out.
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-secondaryText">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-accent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-secondaryText">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-accent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-secondaryText">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-accent"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-secondaryText py-2 rounded hover:bg-accent-darker focus:outline-none focus:ring"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;