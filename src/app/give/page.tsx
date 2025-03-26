"use client";
import React, { useState, FormEvent } from 'react';
import Header from '../../components/navigation/header';
import { useScroll } from "../../hooks";

const GivePage: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const isScrolled = useScroll();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle donation form submission logic here
    console.log({ amount, name, email });
  };

  return (
    <>
      <Header isScrolled={isScrolled} />
      <main className="pt-16 min-h-screen">
        <section className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Give</h1>
          <p className="mb-4">
            Your generosity helps us to continue our mission of spreading the gospel and serving our community. 
            Here are the ways you can give:
          </p>
          
          <h2 className="text-xl font-semibold mb-2">Ways to Give</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Online through our secure donation form.</li>
            <li>In-person during our services.</li>
            <li>Bank transfer to our church account.</li>
          </ul>
          
          <h2 className="text-xl font-semibold mb-2">Online Donation</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="amount" className="block mb-1">Donation Amount</label>
              <input 
                type="number" 
                id="amount" 
                className="w-full p-2 border border-gray-300 rounded" 
                required 
                value={amount || ''}
                onChange={(e) => setAmount(Number(e.target.value))}
              />
            </div>
            <div>
              <label htmlFor="name" className="block mb-1">Your Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full p-2 border border-gray-300 rounded" 
                required 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Your Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full p-2 border border-gray-300 rounded" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button 
              type="submit" 
              className="bg-primary text-white px-4 py-2 rounded"
            >
              Donate
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default GivePage;