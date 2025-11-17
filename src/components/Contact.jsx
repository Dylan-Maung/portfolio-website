import React from 'react'
import NeonText from './ui/NeonText'
import NeonLine from './ui/NeonLine'
import { MdEmail, MdWork } from 'react-icons/md'
import { FaLinkedin, FaGithub, FaFile, FaCalendar  } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { useRef } from 'react'
import { fadeInFromBottom, fadeInFromLeft } from '../utils/animations'

const Contact = () => {
  const emailRef = useRef(null)
  const linkedinRef = useRef(null)
  const githubRef = useRef(null)
  const resumeRef = useRef(null)

  useGSAP(() => {
    const refs = [emailRef.current, linkedinRef.current, githubRef.current, resumeRef.current]

    refs.forEach(ref => {
      ref.addEventListener('mouseenter', () => {
        gsap.to(ref, {
          boxShadow: '0 0 20px rgba(220, 38, 38, 0.8), 0 0 40px rgba(220, 38, 38, 0.5)',
          duration: 0.3
        })
      })
      
      ref.addEventListener('mouseleave', () => {
        gsap.to(ref, {
          boxShadow: '0 0 0px rgba(220, 38, 38, 0)',
          duration: 0.3
        })
      })
    })

    fadeInFromBottom(".header", {duration: 1})
    fadeInFromBottom(".iconText", {duration: 1, stagger: 0.2}, {start: 'top 110%'} )
    fadeInFromLeft(refs, {duration:1 , stagger: 0.2})
    
  }, [])

  return (
    <section id='contact' className='w-full min-h-screen flex flex-col items-center justify-between pt-20 pb-10'>
        <NeonText>
          <h1 className='header text-6xl uppercase bold' >Contact</h1>
        </NeonText>

        <div className='w-full max-w-2xl flex justify-center items-center mb-8'>
          <div>
            <a className='flex items-center border border-red-700 py-4 px-4 rounded-lg gap-4 mb-2'
              ref={emailRef}
              href='mailto:maungdylan@gmail.com'
            >
              <MdEmail className='text-red-500' size={24} />
              <p className='text-xl'>Email: maungdylan@gmail.com</p>
            </a>

            <a className='flex items-center border border-red-700 py-4 px-4 rounded-lg gap-4 mb-2'
              ref={linkedinRef}
              href="https://www.linkedin.com/in/dylan-maung-741975220/"
              target='_blank' 
              rel='noopener noreferrer'
            >
              <FaLinkedin className='text-red-500' size={24} />
              <p className='text-xl'>Linkedin</p>
            </a>

            <a className='flex items-center border border-red-700 py-4 px-4 rounded-lg gap-4 mb-2'
              ref={githubRef}
              href="https://github.com/Dylan-Maung"
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub className='text-red-500' size={24} />
              <p className='text-xl'>GitHub</p>
            </a>

            <a className='flex items-center border border-red-700 py-4 px-4 rounded-lg gap-4 mb-2'
              ref={resumeRef}
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaFile className='text-red-500' size={24} />
              <p className='text-xl'>Resume</p>
            </a>
          </div>
        </div>

      <div className='flex flex-col items-center gap-3'>
        <NeonText>
          <h2 className='text-2xl font-bold'>
            Open to Software Engineering Roles
          </h2>
        </NeonText>

        <NeonLine className='w-full'/>

        <div className='iconText flex gap-8 text-gray-400 mb-12'>
          <div className='flex flex-col items-center'>
            <FaLocationDot className='text-red-500' size={24} />
            <p className='text-gray-400'>San Francisco, CA</p>
          </div>

          <div className='iconText flex flex-col items-center'>
            <MdWork className='text-red-500' size={24} />
            <p className='text-gray-400'>Full-time / Remote / Hybrid / On-site</p>
          </div>

          <div className='iconText flex flex-col items-center'>
            <FaCalendar className='text-red-500' size={24} />
            <p className='text-gray-400'>Available Immediately</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
