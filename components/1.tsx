import React from 'react';

export default function WireframeComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-100 p-4 flex justify-between items-center">
        <div>
          {true && <img src="/logo.png" alt="Logo" className="h-8" />}
        </div>
        <nav>
          {true && (
            <ul className="flex space-x-4">
              <li><a href="#" className="text-blue-500">Home</a></li>
              <li><a href="#" className="text-blue-500">About</a></li>
              <li><a href="#" className="text-blue-500">Contact</a></li>
            </ul>
          )}
        </nav>
      </header>

      <main className="flex-grow container mx-auto p-4">
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Rechercher la licence Microsoft Office"
          />
        </div>
        <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="border p-4 rounded shadow">
            <h2 className="text-xl font-bold">Microsoft Office</h2>
            {true && (
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
                Buy
              </button>
            )}
          </div>
        </section>
      </main>

      <footer className="bg-gray-200 p-4 text-center">
        {true && <p>Information</p>}
      </footer>
    </div>
  );
}