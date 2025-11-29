import React, { useState, useEffect, useRef } from 'react'
import NeonText from './ui/NeonText'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const ProjectCard = ({ project, className, onClick }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isLocked, setIsLocked] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    if (isHovered) {
      const timer = setTimeout(() => setIsLocked(true), 50)
      return () => clearTimeout(timer)
    } else {
      setIsLocked(false)
    }
  }, [isHovered])

  useGSAP(() => {
    if (isHovered) {
      gsap.fromTo(containerRef.current.querySelectorAll('.ring'), {x: 150, y: -150, opacity: 0, scale: 2}, {x:0, y: 0, opacity: 1, scale: 1, duration: 0.2, stagger: 0.1, ease: 'power2.out' });
      gsap.to(containerRef.current.querySelectorAll('.bracket'), {opacity: 1})
    } else {
      gsap.to(containerRef.current.querySelectorAll('.ring'), {x: 150, y: -150, opacity: 0, scale: 2})
      gsap.to(containerRef.current.querySelectorAll('.bracket'), {opacity: 0})
    }
  }, [isHovered])

  return (
    <div
      ref={containerRef}
      className={`relative w-full max-w-sm mx-auto ${className || ''}`} 
      style={{ height: '400px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    > 
      {isLocked && (
        <div className='absolute -top-6 left-1/2 -translate-x-1/2 text-white text-xs font-mono animate-pulse z-30 uppercase'
          style={{
            textShadow: '0 0 10px rgba(255,255,255,0.8)'
          }}
        >
          Project Acquired
        </div>
      )}
      
      <div className='absolute inset-0 pointer-events-none z-20'>
        <div
          className='ring absolute inset-0 border-4 rounded-full border-white opacity-0'
          style={{
            boxShadow: '0 0 20px rgba(255,255,255,0.8), inset 0 0 20px rgba(255,255,255,0.3)'
          }}
        ></div>

        <div
          className='ring absolute inset-8 border-4 rounded-full border-white/80 opacity-0'
          style={{
            boxShadow: '0 0 20px rgba(255,255,255,0.8), inset 0 0 20px rgba(255,255,255,0.3)'
          }}
        ></div>

        <div className='bracket absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white opacity-0' />
        <div className='bracket absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white opacity-0' />
        <div className='bracket absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white opacity-0' />
        <div className='bracket absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white opacity-0' />
      </div>

      <div 
        className={`absolute inset-0 transition-all duration-300 ${
          isLocked ? 'shadow-[0_0_30px_rgba(255,0,0,0.6)]' : ''
        }`}
        style={{
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          background: 'linear-gradient(135deg, rgba(40,0,0,0.85), rgba(15,0,0,0.90))',
        }}
      >
        <div className='w-full h-full flex flex-col justify-center items-center text-center p-8'>
          <NeonText>
            <h3 className='text-3xl font-bold mb-4'>
              {project.title}
            </h3>
          </NeonText>

          <p className='text-gray-300 text-sm mb-6 leading-relaxed'>
            {project.description}
          </p>
          
          <div className='flex flex-wrap gap-2 justify-center'>
            {project.techStack.map((tech, i) => (
              <span 
                key={i} 
                className='px-3 py-1 text-xs border-2 border-magenta-500 text-magenta-400 font-mono font-bold'
                style={{
                  textShadow: '0 0 5px rgba(255,0,255,0.5)'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard