import React from 'react';

export default function WireframeComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <div className="text-lg font-bold">Logo</div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Products</a></li>
            <li><a href="#" className="hover:underline">Windows Licenses</a></li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow p-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Windows License</h1>
          <div className="mb-4">
            <img src="/path/to/image.jpg" alt="Image of Windows License" className="w-full h-auto" />
          </div>
          <p className="mb-2">Description of the Windows License</p>
          <p className="mb-2">Version of the Windows License</p>
          <p className="mb-2">System requirements for the Windows License</p>
        </div>
      </main>
      <footer className="p-4 bg-gray-800 text-white">
        <div className="mb-2">Contact Information</div>
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}