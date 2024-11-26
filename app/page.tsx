'use client'

import LandingPage from '@/components/LandingPage'
import { useState, useEffect } from 'react'




export default function Page() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
   <LandingPage/>
  )
}

