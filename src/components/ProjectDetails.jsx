import React, { useState, useRef } from 'react'
import NeonText from './ui/NeonText'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const ProjectDetails = ({details, onClose}) => {
  const containerRef = useRef(null)
  const circleRef = useRef(null)
  const [isHovered, setIsHovered] = useState(null)

  useGSAP(() => {
    let tl = gsap.timeline();
    tl.fromTo(containerRef.current, {x: -150, y: -150, scale: 0.25, opacity: 0}, {x:0, y: 0, opacity: 1, scale: 0.25, duration: 0.3})
    tl.to(containerRef.current, {scale: 1, duration: 0.2})
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

  return (
    <div ref={containerRef} className='fixed inset-0 z-50 flex justify-center items-center'>
        <div className='w-3/4 h-3/4 bg-black flex justify-center py-8 px-8 relative'
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

          
          <NeonText><h1 className='text-xl uppercase'>{details.title}</h1> </NeonText>


        </div>
    </div>
  )
}

export default ProjectDetails
