// Infinite Carousel Animation Tutorial: https://www.youtube.com/watch?v=KD1Yo8a_Qis

import React, { useState, useRef, useEffect } from 'react'
import NeonText from './ui/NeonText'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Overview from './ProjectSections/Overview'
import Demo from './ProjectSections/Demo'
import KeyFeatures from './ProjectSections/KeyFeatures'
import ChallengesSolutions from './ProjectSections/ChallengesSolutions'
import MyRole from './ProjectSections/MyRole'
import FuturePlans from './ProjectSections/FuturePlans'
import NeonLine from './ui/NeonLine'

const ProjectDetails = ({details, onClose}) => {
  const containerRef = useRef(null)
  const circleRef = useRef(null)
  const [isHovered, setIsHovered] = useState(null)
  const sections = ["Overview", "Demo", "Challenges & Solutions", "My Role", "Future Plans"]
  const [displayedSection, setDisplayedSection] = useState(null)
  const outerMeshRef = useRef(null)
  const innerMeshRef = useRef(null)
  const [animationComplete, setAnimationComplete] = useState(false)

  const sectionComponents = {
    "Overview": Overview,
    "Demo": Demo,
    "Key Features": KeyFeatures,
    "Challenges & Solutions": ChallengesSolutions,
    "My Role": MyRole,
    "Future Plans": FuturePlans
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  useGSAP(() => {
    let tl = gsap.timeline();
    tl.fromTo(containerRef.current, {x: -150, y: -150, scale: 0.25, opacity: 0}, {x:0, y: 0, opacity: 1, scale: 0.25, duration: 0.3})
    tl.to(containerRef.current, {scale: 1, duration: 0.1, ease: "power2.out", onComplete: () => {window.dispatchEvent(new Event('resize'))}})
  }, [])

  useGSAP(() => {
    if (isHovered) {
      gsap.to(circleRef.current, {
        opacity: 1,
        boxShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.5)',
        duration: 0.2})
    } else {
      gsap.to(circleRef.current, {opacity: 1, duration: 0.2, border: 'transparent', boxShadow: 'none'})
    }
  }, [isHovered])

  useGSAP(() => {
    if (displayedSection && outerMeshRef.current && innerMeshRef.current) {
      setAnimationComplete(false);

      let tl = gsap.timeline();

      tl.fromTo(outerMeshRef.current.position, {y: -10}, {y:0, duration: 0.5})
      tl.fromTo(outerMeshRef.current.scale, {x: 0, y: 0, z: 0}, {x: 1, y: 1, z: 1, duration: 0.5}, 0)
      tl.fromTo(outerMeshRef.current.material, {opacity: 0}, {opacity: 1, duration: 0.5}, 0)
      tl.fromTo(outerMeshRef.current.scale, {x: 10, y: 10, z: 10}, {x: 1, y: 1, z: 1, duration: 0.5}, 0.5)
      tl.fromTo(outerMeshRef.current.material, {opacity: 1}, {opacity: 0, duration: 0.5}, 0.5)

      tl.fromTo(innerMeshRef.current.position, {y: -10}, {y:0, duration: 0.5}, 0)
      tl.fromTo(innerMeshRef.current.scale, {x: 0, y: 0, z: 0}, {x: 1, y: 1, z: 1, duration: 0.5}, 0)
      tl.fromTo(innerMeshRef.current.material, {opacity: 0}, {opacity: 1, duration: 0.5}, 0)
      tl.fromTo(innerMeshRef.current.scale, {x: 10, y: 10, z: 10}, {x: 1, y: 1, z: 1, duration: 0.5}, 0.5)
      tl.fromTo(innerMeshRef.current.material, {opacity: 1}, {opacity: 0, duration: 0.5}, 0.5)

      tl.call(() => {
        setAnimationComplete(true)
      })
    }
    
  }, [displayedSection])

  return (
    <div ref={containerRef} className='fixed inset-0 z-50 flex justify-center items-center'>
        <div className='w-[90%] h-[90%] bg-black flex flex-col items-center py-8 px-8 relative overflow-y-auto'
          style={{
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.5)'
          }}
        > 
          <div ref={circleRef} className='circle absolute top-8 right-8 w-[40px] h-[40px] border-2 border-transparent rounded-full flex items-center justify-center'>
            <button className='text-red-400 text-2xl hover:text-red-700' 
              onClick={onClose}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              >
                X
            </button>
          </div>
          
          <NeonText><h1 className='text-4xl uppercase mb-4'>{details.title}</h1> </NeonText>
          <h3 className='text-sm uppercase mb-4'>{details.description}</h3>

          <div className='w-full h-[40px]'> 
            <NeonLine />
          </div>
          
          
          <div className='h-[700px] w-full relative'>
            <Canvas camera={{ position: [0, 0, 4], fov: 80 }}>
              <mesh ref={outerMeshRef}>
                <sphereGeometry args={[2, 32, 32]} />
                <meshBasicMaterial color={0x64c8ff} wireframe transparent opacity={0.8} />
              </mesh>
              
              <mesh ref={innerMeshRef}>
                <sphereGeometry args={[1.8, 16, 16]} />
                <meshBasicMaterial color={0xff64c8} wireframe transparent opacity={0.2} />
              </mesh>
              <OrbitControls  enableZoom={false} autoRotate={true} autoRotateSpeed={0.5}/>
            </Canvas>


            {animationComplete && (
              <div className='absolute inset-0 flex items-center justify-center'>
                {React.createElement(sectionComponents[displayedSection], {details: details})}
              </div>
            )}
          </div>

          <div className='w-full h-1/6 flex overflow-x-auto uppercase'>
            <div className='flex justify-center items-center items-center gap-24 flex-none pr-24'
                style={{ animation: 'recycle 30s infinite linear' }}
              >
                {sections.map((section, i) => (
                  <NeonText key={i}>
                    <a className='p-10 hover:text-[#FF003C] cursor-pointer' onClick={() => setDisplayedSection(section)}>{section}</a>
                  </NeonText>
                ))}
              </div>

            <div className='flex justify-center items-center items-center gap-24 flex-none  pr-24'
              style={{ animation: 'recycle 30s infinite linear'}}
            >
              {sections.map((section, i) => (
                <NeonText key={i}>
                  <a className='p-10 hover:text-[#FF003C] cursor-pointer' onClick={() => setDisplayedSection(section)}>{section}</a>
                </NeonText>
              ))}
            </div>
          </div>
        </div>

        <style>{`
        @keyframes recycle {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }

        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
        `}</style>
    </div>
  )
}

export default ProjectDetails

{/* <div>
              {details.demo.map((media, i) => (
                <img 
                  key={i} 
                  src={media} 
                  alt={`BingeFlix feature ${i + 1}`}
                />
              ))}
            </div>
            
            <div>
              {details.fullDescription.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            
            
            <ul>
              {details.techStack.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>

            <ul>
              {details.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <ul>
              {details.challenges.map((challenge, i) => (
                <li key={i}>{challenge}</li>
              ))}
            </ul>
            
            <ul>
              {details.team.map((member, i) => (
                <li key={i}>{member}</li>
              ))}
            </ul>
            <h2>{details.role}</h2>

            <div>
              {details.contributions.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div>
              {details.challenges.map((challenge, i) => (
                <p key={i}>{challenge}</p>
              ))}
            </div>

            <div>
              {details.nextSteps.map((step, i) => (
                <p key={i}>{step}</p>
              ))}
            </div> */}