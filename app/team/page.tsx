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

]
const testimonialsB = [
  {
    quote: "Turns bland ideas into brilliant concepts with a dash of creativity. They’re the spark that gets the brainstorming sessions buzzing",
    name: "Nilakshi Mishra",
    designation: "GROWTH ASSOCIATE",
    src: "https://home.ekak.in/Neelakshi%20Mishra%20(Ekak%20Website.png",
  },
  {
    quote: "Brings positivity and energy to every project. They make work enjoyable and are always ready to lend a hand or a laugh.",
    name: "Unnati Bajpai",
    designation: "BUSINESS DEVELOPER",
    src: "https://media.licdn.com/dms/image/v2/D5603AQEtDsXKW1i5xA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720372188272?e=1738195200&v=beta&t=bXD6eylQWr1oWIJMyMeD04bU3qFYKfGEm4DJc83WuiA",
  },
  {
    quote: "A quiet powerhouse behind the scenes. Shy? Maybe. But their wit and hidden fun always brighten the workday!",
    name: "Anjali Maurya",
    designation: "BUSINESS DEVELOPER",
    src: "https://home.ekak.in/Anjali%20Maurya%20Ekak%20Website.png",
  },
 
]
const testimonialsD = [
  {
    quote: "Sweet and reliable, Astha blends code with a touch of charm, always delivering results with a smile.",
    name: "Astha Dixit",
    designation: "PYTHON DEVELOPER",
    src: "https://home.ekak.in/Astha%20Dixit%20(ekak%20website).png",
  },
  {
    quote: "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Richa Shukla",
    designation: "PYTHON DEVELOPER",
    src: "https://home.ekak.in/Richa%20Shukla%20(Ekak%20Website).png",
  },
  {
    quote: "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Amitesh Gaur",
    designation: "PYTHON DEVELOPER",
    src: "https://home.ekak.in/Amitesh%20Gaur%20(Ekak%20Website).png",
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
            <h2 className="text-3xl font-bold mb-8 text-center">Business Team</h2>
            <AnimatedTestimonials testimonials={testimonialsB} />
          </div>
          )}

          {activeSection === 'development' && (
            <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Development Team</h2>
            <AnimatedTestimonials testimonials={testimonialsD} />
          </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

