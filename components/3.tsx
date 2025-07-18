import React from 'react';

export default function WireframeComponent() {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='bg-gray-800 text-white p-4 flex justify-between items-center'>
        <div>
          <h1 className='text-xl font-bold'>Logo</h1>
        </div>
        <nav>
          <ul className='flex space-x-4'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Products</a></li>
            <li><a href='#'>Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className='flex-grow p-8'>
        <section className='mb-8'>
          <h2 className='text-2xl font-bold mb-4'>Product Comparison</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='border p-4'>
              <h3 className='text-xl font-semibold'>ESET</h3>
              <p>Details about ESET</p>
              <p>Rating: ****</p>
              <p>Price: $40</p>
            </div>
            <div className='border p-4'>
              <h3 className='text-xl font-semibold'>Norton</h3>
              <p>Details about Norton</p>
              <p>Rating: ****</p>
              <p>Price: $50</p>
            </div>
          </div>
        </section>
        <section>
          <h2 className='text-2xl font-bold mb-4'>Best Option for Your Needs</h2>
          <p>Choose the best product based on your requirements.</p>
        </section>
      </main>
      <footer className='bg-gray-800 text-white p-4'>
        <div className='mb-4'>
          <h4 className='text-lg font-bold'>Contact Information</h4>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div>
          <h4 className='text-lg font-bold'>Follow Us</h4>
          <div className='flex space-x-4'>
            <a href='#' className='text-blue-500'>Facebook</a>
            <a href='#' className='text-blue-300'>Twitter</a>
            <a href='#' className='text-indigo-500'>LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}