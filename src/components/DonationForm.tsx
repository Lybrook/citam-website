import React, { useState, FormEvent } from 'react';

const DonationForm: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle donation form submission logic here
    console.log({ amount, name, email });
  };

  return (
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
  );
};

export default DonationForm;
