'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Cpu, Network, Zap, Rocket, Globe } from 'lucide-react'

interface TimelineItem {
  year: string
  title: string
  description: string
  icon: 'brain' | 'cpu' | 'network' | 'zap' | 'rocket' | 'globe'
}

const timelineData: TimelineItem[] = [
  {
    year: '2020',
    title: 'Company Founded',
    description: 'Our AI journey began with a vision to revolutionize technology.',
    icon: 'brain'
  },
  {
    year: '2021',
    title: 'First AI Model',
    description: 'Developed our first breakthrough AI model for natural language processing.',
    icon: 'cpu'
  },
  {
    year: '2022',
    title: 'Expanded Services',
    description: 'Launched AI-powered solutions for various industries.',
    icon: 'network'
  },
  {
    year: '2023',
    title: 'AI Innovation Award',
    description: 'Recognized for our contributions to AI advancement.',
    icon: 'zap'
  },
  {
    year: '2024',
    title: 'Global Expansion',
    description: 'Opened offices in major tech hubs around the world.',
    icon: 'globe'
  },
  {
    year: '2025',
    title: 'Future Vision',
    description: 'Continuing to push the boundaries of AI technology.',
    icon: 'rocket'
  }
]

const iconComponents = {
  brain: Brain,
  cpu: Cpu,
  network: Network,
  zap: Zap,
  rocket: Rocket,
  globe: Globe
}

const Timeline: React.FC = () => {
  return (
    <div className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Our AI Journey</h2>
        <div className="relative wrap overflow-hidden">
          <div className="absolute h-full border border-blue-500 left-1/2 transform -translate-x-1/2"></div>
          {timelineData.map((item, index) => {
            const IconComponent = iconComponents[item.icon]
            return (
              <motion.div 
                key={index}
                className={`mb-8 flex justify-between items-center w-full ${
                  index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-blue-500 shadow-xl w-12 h-12 rounded-full">
                  <IconComponent className="text-white mx-auto" size={24} />
                </div>
                <motion.div 
                  className="order-1 bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <h3 className="mb-3 font-bold text-white text-xl">{item.year}: {item.title}</h3>
                  <p className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100">{item.description}</p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Timeline

