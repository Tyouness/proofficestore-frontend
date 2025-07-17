import React from 'react';

export default function WireframeComponent() {
  const handlePurchase = () => {
    // Simulate sending email confirmation
    alert('Confirmation par e-mail envoyée');
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Acheter une Licence</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handlePurchase}
      >
        Acheter
      </button>
    </div>
  );
}