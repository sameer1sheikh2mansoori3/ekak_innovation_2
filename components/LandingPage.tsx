'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Cpu, Globe, Rocket, Send } from 'lucide-react'

import { motion } from 'framer-motion'




import  Timeline from '@/components/Timeline';


export default function LandingPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Hero Section */}
      <section className="px-4 py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-indigo-900 opacity-20"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
            >
              AI Revolution Starts Here
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8"
            >
              Unleash the power of artificial intelligence to transform your reality
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                Initiate AI Sequence
                <Rocket className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
          <div className="mt-12 flex justify-center">
            {/* <WorldMapDemo/> */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Cutting-Edge AI Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quantum Neural Networks", icon: Brain, description: "We believe renewable energy can transform communities and improve lives. With years of expertise, we specialize in providing innovative green solutions tailored to diverse needs" },
              { title: "Holographic Data Analysis", icon: Cpu, description: "We offer quick, efficient, and cost-effective product development, from one-of-a-kind prototypes to small production runs and expert consulting." },
              { title: "Sentient Predictive Engines", icon: Globe, description: "Our products enhance safety in factories and warehouses, improve road safety, and optimize supply chain tracking to prevent accidents, boost productivity, and ensure compliance." }
            ]?.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-300">
                  <CardHeader>
                    <feature.icon className="h-12 w-12 mb-4 text-purple-400" />
                    <CardTitle className="text-purple-300">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Ready to Transcend Human Limitations?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the AI singularity and redefine the boundaries of possibility. The future is now.
          </p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Input
              type="email"
              placeholder="Enter your email"
              className="max-w-xs bg-gray-800 border-gray-700 text-white"
            />
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
              Access the Matrix
              <Send className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-16 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Voices from the Future</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Dr. Elara Vex", role: "Quantum AI Architect", content: "This startup's neural interfaces have allowed us to achieve symbiosis with AI, pushing the boundaries of human cognition." },
              { name: "Zephyr Nexus", role: "Cybernetic Futurist", content: "Their sentient algorithms have not just predicted market trends, they've created entirely new economic paradigms." }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="bg-gray-900 border-gray-800 hover:border-purple-500 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-300">
                      {testimonial.name}
                      <Badge variant="secondary" className="text-xs bg-purple-900 text-purple-200">
                        {testimonial.role}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">&quot;{testimonial.content}&quot;</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Timeline/>
      {/* Footer */}
      
    </div>
  )
}

