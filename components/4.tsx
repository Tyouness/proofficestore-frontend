import React from 'react';

export default function WireframeComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-between items-center p-4 bg-gray-100 shadow-md">
        <div className="flex items-center">
          <div className="mr-4">Logo</div>
          <nav className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">Nav Item</a>
          </nav>
        </div>
        <div>
          <button className="text-gray-600 hover:text-gray-800">Cart</button>
        </div>
      </header>

      <main className="flex-grow p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border rounded shadow-sm p-4">
            <img src="https://via.placeholder.com/150" alt="Product Image" className="w-full h-32 object-cover mb-2" />
            <h2 className="text-lg font-bold">Product Title</h2>
            <p className="text-gray-600 mb-2">Product Description</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
          </div>
        </div>
      </main>

      <footer className="p-4 bg-gray-100 shadow-md">
        <div className="mb-2">Contact Information</div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">Social Link</a>
        </div>
      </footer>

      <div className="fixed bottom-0 right-0 bg-white p-4 shadow-md w-64">
        <h2 className="text-lg font-bold mb-2">Cart</h2>
        <div className="border-b pb-2 mb-2">
          <div className="flex items-center justify-between mb-2">
            <img src="https://via.placeholder.com/50" alt="Product Image" className="w-12 h-12 object-cover mr-2" />
            <div>
              <h3 className="text-sm">Product Title</h3>
              <div className="flex items-center">
                <input type="number" className="w-16 border p-1 mr-2" defaultValue={1} />
                <button className="text-red-500">Remove</button>
              </div>
            </div>
          </div>
        </div>
        <button className="bg-green-500 text-white px-4 py-2 rounded w-full">Checkout</button>
      </div>
    </div>
  );
}