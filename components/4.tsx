import React from 'react';

export default function WireframeComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <div className="logo">Logo</div>
        <nav className="flex space-x-4">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Contact</a>
        </nav>
        <div className="cart">Cart</div>
      </header>
      <main className="flex-1 p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((product) => (
            <div key={product} className="border p-4">
              <img src="https://via.placeholder.com/150" alt="Product" className="w-full" />
              <h2 className="font-bold text-lg mt-2">Product Title</h2>
              <p className="text-gray-700 mt-1">Product Description</p>
              <button className="mt-2 bg-blue-500 text-white py-1 px-4 rounded">Add to Cart</button>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-gray-800 text-white p-4">
        <div className="contact-info">Contact Info</div>
        <div className="social-links flex space-x-2 mt-2">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </footer>
      <div className="cart p-4 bg-white shadow-md absolute top-0 right-0 mt-16">
        <h2 className="font-bold mb-4">Shopping Cart</h2>
        {[1, 2].map((product) => (
          <div key={product} className="border-b pb-2 mb-2">
            <img src="https://via.placeholder.com/50" alt="Product" className="w-12 inline-block mr-2" />
            <span className="title">Product Title</span>
            <input className="quantity-selector ml-2 w-12" type="number" min="1" defaultValue="1" />
            <button className="ml-2 text-red-500">Remove</button>
          </div>
        ))}
        <button className="w-full bg-green-500 text-white py-2 mt-4 rounded">Checkout</button>
      </div>
    </div>
  );
}