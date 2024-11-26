// import React, { useEffect, useRef } from 'react'
// import { Scene, PerspectiveCamera, WebGLRenderer, SphereGeometry, MeshBasicMaterial, Mesh, PointLight } from 'three'

// const GitHubGlobe = () => {
//   const globeRef = useRef(null)

//   useEffect(() => {
//     if (!globeRef.current) return

//     // Setup scene
//     const scene = new Scene()
//     const camera = new PerspectiveCamera(75, globeRef.current.offsetWidth / globeRef.current.offsetHeight, 0.1, 1000)
//     const renderer = new WebGLRenderer({ antialias: true })
//     renderer.setSize(globeRef.current?.offsetWidth, globeRef.current.offsetHeight)
//     globeRef.current.appendChild(renderer.domElement)

//     // Add a sphere (the globe)
//     const geometry = new SphereGeometry(2, 32, 32)
//     const material = new MeshBasicMaterial({ color: 0x0077ff, wireframe: true }) // Wireframe effect for aesthetics
//     const globe = new Mesh(geometry, material)
//     scene.add(globe)

//     // Add lighting
//     const light = new PointLight(0xffffff, 1, 100)
//     light.position.set(5, 5, 5)
//     scene.add(light)

//     camera.position.z = 5

//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate)
//       globe.rotation.y += 0.001 // Spin the globe
//       renderer.render(scene, camera)
//     }
//     animate()

//     // Cleanup
//     return () => {
//       globeRef.current.innerHTML = ""
//     }
//   }, [])

//   return <div ref={globeRef} className="w-full h-64 md:h-96 bg-white" />
// }

// export default GitHubGlobe
