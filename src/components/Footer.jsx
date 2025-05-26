import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-green text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-medium mb-4 border-b border-[#ffffff]/20 pb-2">
              ABOUT
            </h3>
            <p className="text-sm">A vision</p>
          </div>

          <div>
            <h3 className="font-medium mb-4 border-b border-[#ffffff]/20 pb-2">
              Quick Links
            </h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="no-underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="no-underline">
                  Edukasi
                </a>
              </li>
              <li>
                <a href="#" className="no-underline">
                  Berita
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 border-b border-[#ffffff]/20 pb-2">
              Contact
            </h3>
            <p className="text-sm">exampleemail@gmail.com</p>
            <p className="text-sm">+62xxxxxxxxxxx</p>
          </div>
        </div>

        <div className="text-center text-xs mt-12">
          © 2025 Capstone. All rights reserved
        </div>
      </div>
    </footer>
  );
}
