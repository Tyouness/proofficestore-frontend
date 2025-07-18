import React from 'react';

export default function WireframeComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-100 p-4 flex justify-between items-center">
        <div className="logo">Logo</div>
        <nav className="navigation">Navigation</nav>
      </header>
      <main className="flex-grow p-4">
        <section className="product-comparison grid grid-cols-2 gap-4">
          <div className="product1 border p-4">
            <h2 className="font-bold">ESET</h2>
            <div className="details">Details</div>
            <div className="rating">Rating</div>
            <div className="price">Price</div>
          </div>
          <div className="product2 border p-4">
            <h2 className="font-bold">Norton</h2>
            <div className="details">Details</div>
            <div className="rating">Rating</div>
            <div className="price">Price</div>
          </div>
        </section>
        <section className="user-decision mt-4">
          <div className="best-for-needs">Best for your needs</div>
        </section>
      </main>
      <footer className="bg-gray-100 p-4 mt-auto flex justify-between items-center">
        <div className="contact-info">Contact Info</div>
        <div className="social-media-links">Social Media Links</div>
      </footer>
    </div>
  );
}