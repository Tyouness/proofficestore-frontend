import React from 'react';

export default function WireframeComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 p-4 text-white flex justify-between items-center">
        <div className="logo">Logo</div>
        <nav className="navigation">Navigation</nav>
      </header>
      <main className="flex-grow p-4">
        <div className="search-bar mb-4">
          <input
            type="text"
            placeholder="Rechercher la licence Microsoft Office"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="product-list">
          <div className="product bg-white p-4 border border-gray-200 rounded shadow">
            <h2 className="text-lg font-semibold">Microsoft Office</h2>
            <button className="mt-2 bg-blue-500 text-white p-2 rounded">Buy</button>
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 p-4 text-white text-center">
        Information
      </footer>
    </div>
  );
}