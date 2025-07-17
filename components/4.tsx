import React from 'react';

export default function WireframeComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <div className="flex items-center">
          <div className="font-bold text-xl">Logo</div>
        </div>
        <nav className="flex space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Shop</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
        <div className="flex items-center">
          <button className="bg-gray-700 p-2 rounded">Cart</button>
        </div>
      </header>
      <main className="flex-grow p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border p-4 rounded">
            <div className="h-32 bg-gray-200 mb-4"></div>
            <h2 className="font-bold text-lg mb-2">Product Title</h2>
            <p className="text-sm text-gray-600">Product Description</p>
            <button className="mt-2 bg-blue-500 text-white p-2 rounded">Add to Cart</button>
          </div>
          {/* Repeat Product Card as needed */}
        </div>
      </main>
      <footer className="bg-gray-800 text-white p-4">
        <div>
          <h2 className="font-bold">Contact Info</h2>
          <address className="text-sm">
            123 Example Street<br />
            City, Country
          </address>
        </div>
        <div className="mt-4">
          <h2 className="font-bold">Follow Us</h2>
          <div className="flex space-x-2">
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Twitter</a>
            <a href="#" className="hover:underline">Instagram</a>
          </div>
        </div>
      </footer>
      <div className="fixed top-0 right-0 w-1/3 bg-white h-full shadow-lg">
        <div className="p-4">
          <h2 className="font-bold text-lg">Cart</h2>
          <div className="border-t mt-2 pt-2">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <div className="h-16 w-16 bg-gray-200"></div>
                <div className="ml-2">
                  <h3 className="font-bold">Product Title</h3>
                </div>
              </div>
              <div>
                <input type="number" className="border w-12 p-1" />
              </div>
              <button className="bg-red-500 text-white p-1 rounded">Remove</button>
            </div>
            {/* Repeat Cart Item as needed */}
          </div>
          <button className="mt-4 bg-green-500 text-white p-3 rounded w-full">Checkout</button>
        </div>
      </div>
    </div>
  );
}