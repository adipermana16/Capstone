import React from "react";

export default function About() {

  return (
    <section className="text-center space-y-10 px-4 py-12">
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-blue-800">NEWS</h2>
        <p className="text-sm text-gray-600">
          Getting started with kamiudahmudah is simple
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            {
              title: "Create an Account",
              desc: "Sign up and get started with free access to academic tools.",
            },
            {
              title: "Browse or Upload",
              desc: "Search for academic materials or support the community with your uploads.",
            },
            {
              title: "Download & Study",
              desc: "Download notes and study guides to prepare with better preparation.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="shadow-md hover:shadow-lg transition-all p-4"
            >
              <h3 className="text-lg font-semibold text-purple-700 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Waste Detection Section */}
      <div className="bg-[#f8f9ff] py-12">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Waste Detection
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto px-4">
          <div className="md:w-1/2">
            <div
              className="relative bg-gray-800 rounded-lg overflow-hidden cursor-pointer group shadow-xl"
            >
              <div className="w-full h-64 bg-gray-500 group-hover:scale-105 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 hover:bg-white rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  ▶
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 text-left">
            <div className="border-l-4 border-pink-400 pl-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Komunitas Edukasi
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Share your notes, assignments and study materials with fellow
                students in just a few clicks.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Videos Section */}
      <div className="bg-[#f5f7ff] py-12">
        <h2 className="text-2xl font-bold text-blue-800">Vidio Terkait</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-6 px-4">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="relative bg-gray-800 rounded-lg overflow-hidden cursor-pointer group shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="w-full h-48 bg-gray-500 group-hover:scale-105 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 `}
                >
                  ▶
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h4 className="text-white font-semibold text-sm">
                  Video Edukasi Sampah {index + 1}
                </h4>
                <p className="text-gray-300 text-xs mt-1">
                  Pelajari cara mengelola sampah dengan benar
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-bold text-blue-800">CAPSTONE PROJECT</h2>
        <p className="text-sm text-gray-600 max-w-md mx-auto">
          Our platform is dedicated to the academic success of UMBD students.
        </p>
      </div>
    </section>
  );
}
