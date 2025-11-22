import React, { useRef, useState } from 'react'
import NeonText from './ui/NeonText'
import { fadeInFromBottom, glitchInAnimation } from '../utils/animations'
import { useGSAP } from '@gsap/react'
import ProjectCard from './ProjectCard.jsx'
import { PROJECT_LIST } from '../constants/constants'
import ProjectDetails from './ProjectDetails'

const Projects = () => {
  const textRef = useRef(null)
  const [selectedProject, setSelectedProject] = useState(null)

  useGSAP(() => {
    glitchInAnimation(textRef.current, {delay: 0.2})
    fadeInFromBottom('.projectCard', {stagger: 0.2})
  }, [])

  return (
    <section id="projects" className='w-full min-h-screen relative overflow-hidden bg-black'>
      <div className='w-full px-8 py-20'>
        <div className='flex justify-center mb-16'>
          <NeonText>
            <h1 ref={textRef} className='md:text-6xl uppercase'>
              Projects
            </h1>
          </NeonText>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          {PROJECT_LIST.map((project) => (
            <ProjectCard className="projectCard cursor-pointer"
              key={project.id} 
              project={project} 
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectDetails details={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  )
}

export default Projects