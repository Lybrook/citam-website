"use client"
// import React from 'react';
import Header from '../../components/navigation/header';
import { useScroll } from '../../hooks'; // Import the useScroll hook


const ContactPage: React.FC = () => {
  const isScrolled = useScroll(); // Use the hook to detect scroll state

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <>
      <Header isScrolled={isScrolled} />

      <main className="pt-16 min-h-screen">
        <section className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="mb-4">We would love to hear from you! Please fill out the form below or reach us at:</p>
          
          <div className="mb-6">
            <h2 className="text-lg font-semibold">Contact Information</h2>
            <p>Address: Kitale Town, Trans Nzoia County, Kenya</p>
            <p>Phone: +254 712 345 678</p>
            <p>Email: info@citamkitale.org</p>
          </div>
          
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full p-2 border border-gray-300 rounded" 
                required 
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full p-2 border border-gray-300 rounded" 
                required 
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea 
                id="message" 
                className="w-full p-2 border border-gray-300 rounded" 
                rows={4} 
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="bg-primary text-white px-4 py-2 rounded"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default ContactPage;
