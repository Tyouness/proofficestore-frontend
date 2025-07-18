import React from 'react';

export default function WireframeComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="text-lg font-bold">Logo</div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Products</a></li>
            <li><a href="#" className="hover:underline">Windows Licenses</a></li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow p-8">
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <img src="#" alt="Image of Windows License" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Windows License</h2>
            <p className="text-gray-700 mb-4">Description of the Windows License</p>
            <p className="text-gray-700 mb-2"><strong>Version:</strong> Version of the Windows License</p>
            <p className="text-gray-700"><strong>System Requirements:</strong> System requirements for the Windows License</p>
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>Contact Information</div>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Twitter</a>
            <a href="#" className="hover:underline">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}