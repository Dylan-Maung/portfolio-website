import { OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { ChevronDown } from 'lucide-react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react';
import NeonText from './ui/NeonText'

function Model() {
    const { scene } = useGLTF('/turtle.glb')
    return <primitive object={scene} rotation={[Math.PI, 0, 0]} scale={5} />
}

const Hero = () => {
    useGSAP(() => {
        gsap.to('#hero', {opacity: 1, delay: 1.5, y: -20, stagger: .2})
        gsap.to('#scroll', {opacity: 1, delay: 2.5, duration: 1})
    }, [])

    return (
        <section className='w-full h-screen relative overflow-hidden'>
            
            <div className='w-full h-screen flex flex-col items-center pt-20'>
                <h1 id="hero" className='text-semibold text-white text-4xl md:text-5xl lg:text-6xl translate-y-20 opacity-0'>
                    Explore the Depths.
                </h1>
                
                <p id="hero" className='text-gray-500 text-lg md:text-xl mb-5 translate-y-20 opacity-0'>
                    Scroll deeper, the story unfolds below
                </p>
                <div className='w-4/5 h-1/2 border border-red-950 shadow-[0_0_20px_rgba(220,38,38,0.3)] rounded-3xl mt-5 ' style={{
                    background: 'linear-gradient(to bottom, #1d3a8a, #0f2557, #0a1929, #00080D)'
                }}>
                    <Canvas camera={{ position: [0, 6, 35], fov: 75 }} className='h-full w-full rounded-3xl'>
                        <ambientLight intensity={3} />
                        <spotLight 
                            position={[0, 10, 0]} 
                            angle={1.5} 
                            penumbra={0.5} 
                            intensity={50}
                            distance={50}
                        />
                        <pointLight position={[10, 10, 10]} intensity={10} />
                        <pointLight position={[-10, 10, -10]} intensity={10} />
                        
                        <Suspense fallback={null}>
                            <Model />
                        </Suspense>
                        <OrbitControls  enableZoom={false}/>
                    </Canvas>
                </div>
            </div>

            <div id="scroll" className='absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce opacity-0'>
                <span className='text-gray-500 text-sm mb-2'>Scroll Down</span>
                <ChevronDown className='text-gray-500' size={24} />
            </div>
                
        </section>
    )
}

export default Hero