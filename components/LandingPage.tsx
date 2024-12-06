'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Cpu, Globe, Rocket,  } from 'lucide-react'

import  Timeline  from '@/components/Timeline';
import BrandCarousel from './Branding'

// Intersection Observer Hook
function useInView(options) {
  const [ref, setRef] = useState(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry?.isIntersecting)
      },
      { threshold: 0.3, ...options }
    )

    observer.observe(ref)
    return () => observer.disconnect()
  }, [ref, options])

  return { ref: setRef, inView }
}

export default function LandingPage() {
  const heroSection = useInView()
  const featuresSection = useInView()

  return (
    <div className="h-auto bg-black text-gray-100">
      {/* Hero Section */}
      <section
        ref={heroSection.ref}
        className="px-4 py-20 md:py-32 relative overflow-hidden h-screen flex items-center"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-indigo-900 opacity-20"></div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <AnimatePresence>
            {heroSection.inView && (
              <>
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.8 }}
                  className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
                >
                  AI Revolution Starts Here
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xl md:text-2xl text-gray-300 mb-8"
                >
                  Unleash the power of artificial intelligence to transform your reality
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Button
                    size="lg"
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    Initiate AI Sequence
                    <Rocket className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Features Section */}
      <section
        ref={featuresSection.ref}
        className="px-4 py-16 bg-gray-900"
      >
        <div className="max-w-6xl mx-auto">
          <AnimatePresence>
            {featuresSection.inView && (
              <>
                <motion.h2
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.8 }}
                  className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
                >
                  Cutting-Edge AI Solutions
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Renewable Energy",
                      icon: Lightbulb,
                      description:
                        "We believe renewable energy can transform communities and improve lives. With years of expertise, we specialize in providing innovative green solutions tailored to diverse needs.",
                    },
                    {
                      title: "Product Development",
                      icon: Cpu,
                      description:
                        "We offer quick, efficient, and cost-effective product development, from one-of-a-kind prototypes to small production runs and expert consulting.",
                    },
                    {
                      title: "Digital Transformations",
                      icon: Globe,
                      description:
                        "Our products enhance safety in factories and warehouses, improve road safety, and optimize supply chain tracking to prevent accidents, boost productivity, and ensure compliance.",
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 50 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                      <Card className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-300">
                        <CardHeader>
                          <feature.icon className="h-12 w-12 mb-4 text-purple-400" />
                          <CardTitle className="text-purple-300">
                            {feature.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-gray-400">
                            {feature.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </AnimatePresence>
        </div>
      </section>
      {/* timeline demo */}
      <section className='my-4'>
        <Timeline/>
      </section>
      {/* demo  */}
      <section >
        <BrandCarousel/>
      </section>
      
    </div>
  )
}
