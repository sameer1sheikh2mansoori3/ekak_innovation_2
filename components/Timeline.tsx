'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Brain, Cpu, Network, Zap, Rocket, Globe } from 'lucide-react'

interface TimelineItem {
  year: string
  title: string
  description: string
  icon: 'brain' | 'cpu' | 'network' | 'zap' | 'rocket' | 'globe'
}

const timelineData: TimelineItem[] = [
  { year: 'July 2018 - Feb 2019', title: '', description: 'Pre-Incubate, IIM Bangalore (NSRCEL).', icon: 'brain' },
  { year: 'July 2020', title: '', description: 'Pitch at ITS Hamburg Competition', icon: 'cpu' },
  { year: 'June 2020', title: '', description: '2nd Runner-up in Smart Car Category (NASCOM-NIPP)', icon: 'network' },
  { year: 'Nov 2020', title: '', description: 'NVIDIA Inception Program: Community Member', icon: 'zap' },
  { year: '2024', title: 'Global Expansion', description: 'Opened offices in major tech hubs around the world.', icon: 'globe' },
  { year: '2025', title: 'Future Vision', description: 'Continuing to push the boundaries of AI technology.', icon: 'rocket' },
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
            const ref = useRef(null)
            const inView = useInView(ref, { once: false })

            return (
              <motion.div
                key={index}
                ref={ref}
                className={`mb-12 flex justify-between items-center w-full ${
                  index % 2 === 0 ? 'flex-row-reverse text-right' : 'flex-row text-left'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                transition={{ type: 'spring', stiffness: 120, damping: 12, delay: index * 0.2 }}
              >
                <div className="order-1 w-6/12"></div>
                <motion.div
                  className="z-20 flex items-center order-1 bg-blue-500 shadow-xl w-12 h-12 rounded-full"
                  animate={inView ? { scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] } : { scale: 1 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 10 }}
                >
                  <IconComponent className="text-white mx-auto" size={24} />
                </motion.div>
                <motion.div
                  className="order-1 bg-gray-800 rounded-lg shadow-xl w-4/12 px-6 py-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <h3 className="mb-3 font-bold text-white text-xl">{item.year} {item.title}</h3>
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
