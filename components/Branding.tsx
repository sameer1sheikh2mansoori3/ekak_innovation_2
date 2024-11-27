"use client"

import { useRef, useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { motion, useMotionValue, useAnimation, useAnimationFrame } from "framer-motion"

export default function BrandCarousel() {
  const [isDragging, setIsDragging] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const constraintsRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const controls = useAnimation()

  const brands = [
    "https://home.ekak.in/1000012564-removebg-preview.png",
    "https://home.ekak.in/1000012565-removebg-preview.png",
    "https://home.ekak.in/1000012562-removebg-preview.png",
    "https://home.ekak.in/1000012560-removebg-preview.png"
  ]

  useAnimationFrame(() => {
    if (carouselRef.current && constraintsRef.current && !isDragging && !isHovering) {
      const currentX = x.get()
      const carouselWidth = carouselRef.current.scrollWidth
      const viewportWidth = constraintsRef.current.offsetWidth

      if (currentX <= -carouselWidth + viewportWidth) {
        x.set(0)
      } else {
        x.set(currentX - 1)
      }
    }
  })

  return (
    <div className="w-full bg-black p-8">
      <div className="overflow-hidden" ref={constraintsRef}>
        <motion.div
          ref={carouselRef}
          className="flex gap-6 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={constraintsRef}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          style={{ x }}
        >
          {[...brands, ...brands].map((brand, index) => (
            <motion.div
              key={index}
              className="relative flex-shrink-0 w-[300px] h-[200px]"
              onHoverStart={() => setIsHovering(true)}
              onHoverEnd={() => setIsHovering(false)}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="w-full h-full bg-gray-900 border-gray-800 p-6 flex items-center justify-center overflow-hidden">
                <img
                  src={brand}
                  alt={`Brand logo ${(index % brands.length) + 1}`}
                  className="w-full h-full object-contain"
                  draggable="false"
                />
              </Card>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 hover:opacity-20 transition-opacity duration-300" />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

