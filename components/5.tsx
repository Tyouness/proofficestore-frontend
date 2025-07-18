import React from 'react';

export default function WireframeComponent() {
  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-lg font-bold mb-4">Acheter une licence</h1>
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Confirmer l'achat
      </button>
      <p className="mt-4 text-sm text-gray-600">
        Un e-mail de confirmation sera envoyé.
      </p>
    </div>
  );
}