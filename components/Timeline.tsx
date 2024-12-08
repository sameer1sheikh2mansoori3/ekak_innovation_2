'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Rocket, Building, Users, Flag } from 'lucide-react'

interface TimelineItem {
  date: string
  title: string
  description: string
  icon: React.ElementType
}

const timelineData: TimelineItem[] = [
  {
    date: '2023',
    title: 'Project Alpha Launched',
    description: 'Successfully deployed our flagship product, revolutionizing the industry.',
    icon: Rocket,
  },
  {
    date: '2022',
    title: 'Expansion to Europe',
    description: 'Opened our first European office, marking a significant milestone in our global growth.',
    icon: Building,
  },
  {
    date: '2021',
    title: 'Series B Funding',
    description: 'Secured $50 million in Series B funding, accelerating our research and development efforts.',
    icon: Star,
  },
  {
    date: '2020',
    title: 'Team Growth',
    description: 'Doubled our team size, bringing in top talent from around the world.',
    icon: Users,
  },
  {
    date: '2019',
    title: 'Company Founded',
    description: 'Our journey began with a simple idea and a passionate team of innovators.',
    icon: Flag,
  },
]

const TimelineItem: React.FC<{ item: TimelineItem; index: number }> = ({ item, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px -100px 0px" })

  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      className={`mb-16 flex justify-between items-center w-full ${isEven ? 'flex-row-reverse' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className={`w-5/12 ${isEven ? 'text-right' : 'text-left'}`}>
        <motion.div
          className={`p-4 bg-gray-800 rounded-lg shadow-lg ${isEven ? 'ml-auto' : 'mr-auto'}`}
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 50 : -50 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className={`flex items-center ${isEven ? 'justify-end' : 'justify-start'} mb-2`}>
            <span className="text-2xl font-bold text-blue-400 mr-2">{item.date}</span>
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
          </div>
          <p className="text-gray-400">{item.description}</p>
        </motion.div>
      </div>
      <div className="w-2/12 flex justify-center">
        <motion.div
          className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center relative"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <item.icon className="w-6 h-6 text-white" />
        </motion.div>
      </div>
      <div className="w-5/12"></div>
    </motion.div>
  )
}

const Timeline: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-16 text-center">Company Timeline</h1>
        <div className="relative">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-500 transform -translate-x-1/2" />
        </div>
      </div>
    </div>
  )
}

export default Timeline