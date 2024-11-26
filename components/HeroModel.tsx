// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useRef } from 'react'
// import { useFrame } from '@react-three/fiber'
// import { Sphere, MeshDistortMaterial } from '@react-three/drei'

// export default function HeroModel() {
//   const meshRef = useRef<any>()

//   useFrame((state, delta) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.x += delta * 0.2
//       meshRef.current.rotation.y += delta * 0.1
//     }
//   })

//   return (
//     <Sphere args={[1, 100, 200]} scale={2} ref={meshRef}>
//       <MeshDistortMaterial
//         color="#4B0082"
//         attach="material"
//         distort={0.6}
//         speed={1.5}
//         roughness={0}
//       />
//     </Sphere>
//   )
// }

