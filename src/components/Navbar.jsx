import React from 'react'

export default function Navbar() {
  return (
    <nav className="bg-blue-900 shadow-md py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Aplikasi Logo */}
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold" style={{ color: 'white' }}>namaaplikasi</span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0">
            <a 
              href="#" 
              className="text-white hover:text-green-300 font-medium transition duration-300 no-underline"
            >
              Home
            </a>
            <a 
              href="#" 
              className="text-white hover:text-green-300 font-medium transition duration-300 no-underline"
            >
              Edukasi
            </a>
            <a 
              href="#" 
              className="text-white hover:text-green-300 font-medium transition duration-300 no-underline"
            >
              Berita
            </a>
            <a 
              href="#" 
              className="text-white hover:text-green-300 font-medium transition duration-300 no-underline"
            >
              Waste Detection
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
