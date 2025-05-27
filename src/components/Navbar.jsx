import React from 'react'

export default function Navbar() {
  return (
    <nav className='bg bg-transparent shadow sticky top-0 z-50'>
    <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-green-700">Youware</h1>
      <ul className="flex space-x-6 text-sm font-medium text-gray-700">
        <li><a href="#" className="hover:text-green-600 transition">Home</a></li>
        <li><a href="#" className="hover:text-green-600 transition">About</a></li>
        <li><a href="#" className="hover:text-green-600 transition">Contact</a></li>
      </ul>
    </div>
    </nav>
  )
}
