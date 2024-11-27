"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Instagram, Twitter, Facebook, Linkedin, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { icon: <Instagram size={20} />, url: "https://www.instagram.com/ekak1nn/?igsh=d3FhdnRtZTU1NDhw#" },
    { icon: <Twitter size={20} />, url: "https://x.com/Ekak1nn?t=TG0nec2gKkL6SNQCh6XFwg&s=09" },
    { icon: <Facebook size={20} />, url: "https://www.facebook.com/EkakInn?mibextid=ZbWKwL" },
    { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/company/ekakinn/posts/?feedView=all" },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4">
            <span className="text-blue-500">EKAK</span>
          </h3>
          <p className="mb-4">Transcending humanity through artificial intelligence</p>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <nav className="flex flex-col space-y-2">
            <Link href="/" className="hover:text-blue-500 transition-colors duration-300">Home</Link>
            <Link href="/about" className="hover:text-blue-500 transition-colors duration-300">About</Link>
            <Link href="/career" className="hover:text-blue-500 transition-colors duration-300">Career</Link>
          </nav>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h4 className="text-xl font-semibold mb-4">Get in Touch</h4>
          <address className="not-italic">
            <p className="flex items-center mb-2">
              <MapPin size={16} className="mr-2" />
              113/216-A Swaroop Nagar,<br />
              Kanpur, Uttar Pradesh,<br />
              India-208002
            </p>
            <p className="flex items-center">
              <Mail size={16} className="mr-2" />
              <a href="mailto:contact@ekak.in" className="hover:text-blue-500 transition-colors duration-300">
                contact@ekak.in
              </a>
            </p>
          </address>
        </motion.div>
      </div>

      <motion.div
        className="mt-8 text-center text-sm text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        © 2024 NeuraTech AI. All rights reserved. Embrace the singularity.
      </motion.div>
    </footer>
  )
}

export default Footer

