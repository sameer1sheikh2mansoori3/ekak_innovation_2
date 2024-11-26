import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-purple-400 mb-2">NeuraTech AI</h3>
            <p>Transcending humanity through artificial intelligence</p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-purple-400 transition-colors">About</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Services</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Contact</a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-600">
          © 2024 NeuraTech AI. All rights reserved. Embrace the singularity.
        </div>
      </footer>
    </div>
  )
}

export default Footer
