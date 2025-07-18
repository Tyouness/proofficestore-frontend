import React from 'react';

export default function WireframeComponent() {
  const handlePurchase = () => {
    // Logic to purchase a license
    // Mock function to simulate sending an email confirmation
    console.log('Purchase confirmed, email sent.');
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Acheter une Licence</h1>
      <button
        onClick={handlePurchase}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Acheter
      </button>
      <p className="mt-4 text-gray-600">Une confirmation sera envoyée par e-mail après l'achat pour conserver un enregistrement de l'achat.</p>
    </div>
  );
}