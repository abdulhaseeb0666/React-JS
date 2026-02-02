import React from 'react'

const App = () => (
    <>
        <nav className="w-full h-20 bg-[#FAF9F6] border-b border-amber-900">
            <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">

            {/* Logo */}
            <div className="flex items-center gap-2">
                <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2JzHiA-r6hKa8AYpnU4R4jC4uEKnRHwk0kg&s"
                alt="Logo"
                className="h-14 w-14 object-cover rounded-full border-2 border-amber-950"
                />
                <span className="text-xl font-semibold text-amber-950">
                MyWebsite
                </span>
            </div>

            {/* Navigation Links */}
            <ul className="hidden md:flex items-center gap-8 text-amber-950 font-medium">
                <li className="hover:text-amber-700 cursor-pointer transition">
                Home
                </li>
                <li className="hover:text-amber-700 cursor-pointer transition">
                About
                </li>
                <li className="hover:text-amber-700 cursor-pointer transition">
                Services
                </li>
                <li className="hover:text-amber-700 cursor-pointer transition">
                Contact
                </li>
            </ul>

            {/* CTA Button */}
            <button className="hidden md:block bg-amber-950 text-[#FAF9F6] px-5 py-2 rounded-lg hover:bg-amber-800 transition">
                Login
            </button>

            </div>
        </nav>
    </>

)

export default App
