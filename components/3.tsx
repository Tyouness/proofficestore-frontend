import React from 'react';

export default function WireframeComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <div className="logo">Logo</div>
        <nav className="navigation">Navigation</nav>
      </header>
      <main className="flex-grow p-4">
        <section className="product-comparison grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="product1 border p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold">ESET</h2>
            <div className="details">Details</div>
            <div className="rating">Rating</div>
            <div className="price">Price</div>
          </div>
          <div className="product2 border p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold">Norton</h2>
            <div className="details">Details</div>
            <div className="rating">Rating</div>
            <div className="price">Price</div>
          </div>
        </section>
        <section className="user-decision text-center">
          <div className="best-for-needs">Best for your needs</div>
        </section>
      </main>
      <footer className="flex justify-between items-center p-4 bg-gray-200">
        <div className="contact-info">Contact Info</div>
        <div className="social-media-links">Social Media Links</div>
      </footer>
    </div>
  );
}