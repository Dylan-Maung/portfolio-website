import { OrbitControls, useGLTF} from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react';

function Model() {
    const { scene } = useGLTF(`${import.meta.env.BASE_URL}turtle.glb`)
    return <primitive object={scene} rotation={[Math.PI, 0, 0]} scale={5} position={[5, 0, 0]}/>
}

function ParticleAnimation({position, particlesRef}) {

    const particlesInitialData = useRef(() => {
        const particles = new Float32Array(700*3)
        for (let i = 0; i < 700 * 3; i +=3 ) {
            particles[i] = position[0] + Math.random() * 7 
            particles[i + 1] = position[1] + Math.random() * 7
            particles[i + 2] = position[2] + Math.random() * 7
        }
        return particles
    }).current()

    useFrame((state, delta) => {
        if (!particlesRef.current) return

        const particles = particlesRef.current.geometry.attributes.position.array
        const origin = [-2, 6, 0]

        for (let i = 0; i < particles.length; i += 3) {
            const x = particles[i]
            const y = particles[i + 1]
            const z = particles[i + 2]
            
            const dx = origin[0] - x
            const dy = origin[1] - y
            const dz = origin[2] - z
            
            const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)
            
            if (distance > 0.5) {
                particles[i] += (dx / distance) * delta * 7
                particles[i+1] += (dy / distance) * delta * 7
                particles[i+2] += (dz / distance) * delta * 7
            } else {
                particles[i] = position[0] + (Math.random() - 0.5) * 8
                particles[i+1] = position[1] + (Math.random() - 0.5) * 8
                particles[i+2] = position[2] + (Math.random() - 0.5) * 8
            }
        }

        particlesRef.current.geometry.attributes.position.needsUpdate = true
    })

    return (
        <points ref={particlesRef}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[particlesInitialData, 3]} />
            </bufferGeometry>
            <pointsMaterial 
                size={0.15}
                color="#FFFFFF"
                sizeAttenuation={true}
            />
        </points>
    )
}

const Hero = () => {
    useGSAP(() => {
        gsap.to('#hero', {opacity: 1, delay: 1.5, y: -20, stagger: .2})
        gsap.to('#scroll', {opacity: 1, delay: 2.5, duration: 1})
    }, [])

    const particleRefOne = useRef()
    const particleRefTwo = useRef()
    const particleRefThree = useRef()

    return (
        <section className='w-full h-screen relative overflow-hidden'>
            <div className='w-full h-screen flex flex-col items-center pt-20'>
                <h1 id="hero" className='text-semibold text-white text-4xl md:text-5xl lg:text-6xl translate-y-20 opacity-0'>
                    Explore the Depths.
                </h1>
                
                <p id="hero" className='text-gray-500 text-lg md:text-xl mb-10 translate-y-20 opacity-0'>
                    Scroll deeper, the story unfolds below
                </p>
                
                <div className='w-4/5 h-1/2 mt-5'>
                    <Canvas camera={{ position: [0, 6, 35], fov: 75 }} className='h-full w-full rounded-3xl'>
                        <directionalLight position={[0, 10, 10]} intensity={7} />
                        <directionalLight position={[5, 5, 5]} intensity={7} />
                        <directionalLight position={[-5, -5, -5]} intensity={7} />
                        <directionalLight position={[5, -5, -5]} intensity={7} />

                        <Suspense fallback={null}>
                            <Model />
                        </Suspense>

                        <mesh position={[16,6,-10]} rotation={[3.5, 1, 0]}>
                            <ringGeometry args={[6, 7, 32]} />
                            <meshStandardMaterial color="#FFFFFF" side={2} />
                        </mesh>
                        <ParticleAnimation position={[16,6,-10]} particlesRef={particleRefOne} />

                        <mesh position={[-2,-8,-2]} rotation={[Math.PI / 2, 0, 0]}>
                            <ringGeometry args={[6, 7, 32]} />
                            <meshStandardMaterial color="#FFFFFF" side={2} />
                        </mesh>
                        <ParticleAnimation position={[-2,-8,-2]} particlesRef={particleRefTwo} />

                        <mesh position={[-24,8,-6]} rotation={[4, -1.30, 0]}>
                            <ringGeometry args={[6, 7, 32]} />
                            <meshStandardMaterial color="#FFFFFF" side={2} />
                        </mesh>
                        <ParticleAnimation position={[-24,8,-6]} particlesRef={particleRefThree} />

                        <OrbitControls  enableZoom={false} autoRotate={true} autoRotateSpeed={0.5}/>
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