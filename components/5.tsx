import React from 'react';

export default function WireframeComponent() {
  return (
    <div className='p-4 bg-gray-100 h-screen flex flex-col items-center justify-center'>
      <h1 className='text-2xl font-bold mb-4'>Acheter une Licence</h1>
      <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>Acheter</button>
      <p className='mt-4 text-gray-700'>Un e-mail de confirmation sera envoyé pour conserver un enregistrement de l'achat.</p>
    </div>
  );
}