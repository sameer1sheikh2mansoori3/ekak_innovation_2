'use client'

import React, { useState } from 'react'
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"
import { motion } from "framer-motion"

const testimonials = [
  {
    quote: "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

const teamSections = [
  { id: 'leadership', title: 'Leadership' },
  { id: 'business', title: 'Business' },
  { id: 'development', title: 'Development' },
]

export default function TeamPage() {
  const [activeSection, setActiveSection] = useState('leadership')

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-12">
          Our <span className="text-blue-500">AI</span> Team
        </h1>
        
        <div className="flex justify-center mb-12">
          {teamSections.map((section) => (
            <button
              key={section.id}
              className={`px-6 py-3 text-lg font-semibold rounded-full mx-2 transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setActiveSection(section.id)}
            >
              {section.title}
            </button>
          ))}
        </div>

        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {activeSection === 'leadership' && (
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">Leadership Team</h2>
              <AnimatedTestimonials testimonials={testimonials} />
            </div>
          )}

          {activeSection === 'business' && (
            <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Leadership Team</h2>
            <AnimatedTestimonials testimonials={testimonials} />
          </div>
          )}

          {activeSection === 'development' && (
            <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Leadership Team</h2>
            <AnimatedTestimonials testimonials={testimonials} />
          </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

