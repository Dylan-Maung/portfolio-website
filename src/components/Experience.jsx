import React from 'react'
import NeonText from './ui/NeonText'
import ExperienceCard from './ExperienceCard';
import { EXPERIENCE_LIST } from '../constants/constants'
import { useGSAP } from '@gsap/react';
import { fadeInFromBottom, fadeInFromLeft, fadeInFromRight } from '../utils/animations';

const Experience = () => {
  const timelineStart = 2020;
  const timelineEnd = 2025;
  const monthLength = 12;
  const years = [];
  
  for (let year = timelineEnd; year >= timelineStart; year--) {
    years.push(year);
  }

  const calculatePosition = (startYear, startMonth) => {
    const yearDiff = timelineEnd - startYear
    const totalMonths = (yearDiff * 12) + (12 - startMonth);
    return totalMonths * monthLength
  }

  useGSAP(() => {
    fadeInFromBottom("#header", {duration: 1});
    fadeInFromLeft(".experienceCard.cardLeft", {duration: 1, stagger: 0.4});
    fadeInFromRight(".experienceCard.cardRight", {duration: 1, stagger: 0.4});
  })

  return (
    <section id="experience" className='w-full min-h-screen relative overflow-hidden pt-20 pb-20'>
      <div className='flex flex-col justify-center items-center mb-16'>
          <NeonText>
            <h1 id="header" className='md:text-6xl uppercase pb-20'>
              Experience
            </h1>
          </NeonText>
        
          <div className='relative'>
            {years.map((year, index) => (
              <React.Fragment key={year}>
                <div className='flex justify-center items-center py-2'>
                  <NeonText><span className='font-bold font-mono text-sm'>{year}</span></NeonText>
                </div>

                <div 
                  className='w-1 bg-red-700 mx-auto animate-pulse'
                  style={{
                    height: `${12 * monthLength}px`,
                    boxShadow: '0 0 10px rgba(255, 0, 0, 0.8), 0 0 20px rgba(255, 0, 0, 0.6), 0 0 30px rgba(255, 0, 0, 0.4)'
                  }}
                />
              </React.Fragment>
            ))}

            {EXPERIENCE_LIST.map((experience, index) => {
              const isLeft = index % 2 === 0;

              return (
                <ExperienceCard 
                  key={experience.id} 
                  experience={experience}
                  position={calculatePosition(experience.startYear, experience.startMonth)}
                  className={`experienceCard ${isLeft ? 'cardLeft right-1/2 pr-8' : 'cardRight left-1/2 pl-8'}`}
                />
              );
            })}
  
          </div>
      </div>


    </section>
  )
}

export default Experience
