import React from 'react'

export default function Hero() {
  return (
    <div className='min-h-screen flex  bg-slate-100 rounded-full'>
    <div className='w-full self-end px-4 lg:w-1/2 '>
      <div className='relative m-10 lg:mt-9 lg:right-0'>
        <img src="/public/me.jpg" alt="1" className='max-w-full mx-auto rounded-full hover:opacity-90 m-5' />
      </div>
    </div>
    <div className='rounded w-full self-center px-4'>
      <h1 className='text-base font-bold md:text-xl animate-bounce'>Hello all 🖐️ I<span className='block font-bold text-4xl'>ADI PERMANA SAPUTRA</span></h1>
      <h2 className='font-medium text-lg mb-6 lg:text-2xl mr-10 animate-pulse'>Front-end developer I have studied.I am proficient in HTML, CSS, and now I am starting to self-teach java script and web development, such as react.My understanding of design principles and user experience has helped me create attractive websites and applications visually and user friendly. I am experienced in web performance optimization techniques to ensure fast loading and smooth user experience. Additionally, I have some understanding of version control systems like Git, which helps me collaborate effectively with the team. I am excited to bring my technical skills, creativity and attention to detail to contribute to a dynamic and innovative team.</h2>
      <a href="#" className='text-base font-semibold bg-slate-600 py-3 px-8 rounded-full hover:shadow-lg hover:opacity-90 transition duration-500 hover:bg-black text-gray-50'>Hubungi saya</a>
    </div>
  </div>
  )
}
