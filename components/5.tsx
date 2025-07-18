import React from 'react';

export default function WireframeComponent() {
  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h1 className="text-xl font-bold mb-4">Acheter une Licence</h1>
      <p className="mb-4">Action: acheter une licence</p>
      <p className="mb-4">Response: envoyer une confirmation par e-mail</p>
      <p className="text-sm text-gray-500">Purpose: conserver un enregistrement de l'achat</p>
    </div>
  );
}