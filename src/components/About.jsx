import React from 'react'

export default function About() {

    return (
        <section className="text-center space-y-4 px-4">
            <h2 className="text-xl font-bold text-blue-800">NEWS</h2>
            <p className="text-sm text-gray-600">Getting started with kamiudahmudah is simple</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {[
                    { title: "Create an Account", desc: "Sign up and get started with free access to academic tools." },
                    { title: "Browse or Upload", desc: "Search for academic materials or support the community with your uploads." },
                    { title: "Download & Study", desc: "Download notes and study guides to prepare with better preparation." },
                ].map((item, index) => (
                    <div key={index} className="shadow-md hover:shadow-lg transition-all">
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-purple-700 mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className="text-xl font-bold text-blue-800">Vidio Terkait</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {[1, 2, 3].map((_, index) => (
                    <div
                        key={index}
                        className="bg-gray-200 rounded-lg h-40 animate-pulse"
                    />
                ))}
            </div>

            <section className="text-center space-y-2 px-4">
                <h2 className="text-xl font-bold text-blue-800">CAPSTONE PROJECT</h2>
                <p className="text-sm text-gray-600 max-w-md mx-auto">
                    Our platform is dedicated to the academic success of UMBD students.
                </p>
            </section>
        </section>

    )
}
