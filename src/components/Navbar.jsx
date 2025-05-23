import React from 'react'

export default function Navbar() {
  return (
    <header className='bg-gray-500 rounded'>
      <nav className='flex justify-between items-center bg-white '>
        <div className='flex items-center space-x-10 p-5'>
          <img className='w-16 p-0 rounded-2xl transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300 ' src="/public/bibd.png" alt="bibd" />
          {/* <p className='text-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded p-1'>Adi Permana S</p> */}
        </div>
        <button className='m-10'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
</button>
      </nav>
    </header>
  )
}
