import React from 'react';

export default function WireframeComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="logo">Logo</div>
        <nav className="navigation">Navigation</nav>
      </header>
      <main className="flex-grow p-4">
        <section className="product-comparison grid grid-cols-2 gap-4">
          <div className="product1 border p-4">
            <h2 className="font-bold text-lg">ESET</h2>
            <p>Details: Yes</p>
            <p>Rating: Yes</p>
            <p>Price: Yes</p>
          </div>
          <div className="product2 border p-4">
            <h2 className="font-bold text-lg">Norton</h2>
            <p>Details: Yes</p>
            <p>Rating: Yes</p>
            <p>Price: Yes</p>
          </div>
        </section>
        <section className="user-decision mt-4">
          <p>Best for Needs: Yes</p>
        </section>
      </main>
      <footer className="bg-gray-700 text-white p-4 flex justify-between items-center">
        <div className="contact-info">Contact Info</div>
        <div className="social-media-links">Social Media Links</div>
      </footer>
    </div>
  );
}