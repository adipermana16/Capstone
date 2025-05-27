import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white ">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-sm flex-grow ">
      <div>
        <h4 className="font-semibold mb-2">Menu</h4>
        <ul>
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Support</h4>
        <ul>
          <li><a href="#" className="hover:underline">Help Center</a></li>
          <li><a href="#" className="hover:underline">Terms of Service</a></li>
          <li><a href="#" className="hover:underline">Privacy Policy</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Follow Us</h4>
        <ul>
          <li><a href="#" className="hover:underline">Facebook</a></li>
          <li><a href="#" className="hover:underline">Instagram</a></li>
          <li><a href="#" className="hover:underline">Twitter</a></li>
        </ul>
      </div>
    </div>
    <div className="text-center text-xs mt-6">© 2025 Youware. All rights reserved.</div>
  </footer>
  )
}
