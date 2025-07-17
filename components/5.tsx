import React from 'react';

export default function WireframeComponent() {
  const handlePurchase = () => {
    // Simulate sending an email confirmation and recording the purchase
    console.log('Confirmation email sent and purchase recorded');
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <h1 className="text-xl font-bold mb-4">Acheter une Licence</h1>
      <button 
        onClick={handlePurchase} 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Acheter
      </button>
    </div>
  );
}