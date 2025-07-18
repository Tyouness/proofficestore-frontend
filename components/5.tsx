import React from 'react';

export default function WireframeComponent() {
  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      <div className="mb-4">
        <h2 className="text-xl font-bold">Action de l'utilisateur</h2>
        <p className="text-gray-700">Acheter une licence</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold">Réponse du système</h2>
        <p className="text-gray-700">Envoyer une confirmation par e-mail</p>
      </div>
      <div>
        <h2 className="text-xl font-bold">But</h2>
        <p className="text-gray-700">Conserver un enregistrement de l'achat</p>
      </div>
    </div>
  );
}