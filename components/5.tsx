import React from 'react';

export default function WireframeComponent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-80">
        <h2 className="text-2xl font-bold mb-4">Acheter une licence</h2>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full">
          Acheter maintenant
        </button>
        <p className="mt-4 text-sm text-gray-600">
          Une confirmation vous sera envoyée par e-mail.
        </p>
      </div>
    </div>
  );
}