import React from 'react'
import { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import NeonText from './ui/NeonText'
import NeonLine from './ui/NeonLine'

const ExperienceCard = ({ experience, position, className }) => {
    const [isHovered, setIsHovered] = useState(false)
    const containerRef = useRef(null)

    const monthNumToAbbrev = ((monthNumber) => {
        if (!monthNumber) return "PRESENT";

        const date = new Date(2025, monthNumber -1);
        return date.toLocaleString('default', { month: 'short' });
    }) 

    useGSAP(() => {
        if (isHovered) {
            gsap.fromTo(containerRef.current, {height: "40px"}, {height: containerRef.current.scrollHeight, duration: 1, ease: "power2.out"})
        } else {
            gsap.to(containerRef.current, {height: "40px", duration: 1, ease: "power2.out"})
        }
    }, [isHovered])

    return (
        <div className={`absolute max-w-2xl ${isHovered ? 'z-50' : 'z-10'} ${className || ''}`} 
            style={{ top: `${position}px` }}
        >
            <div 
                ref={containerRef} 
                className='w-full h-[40px] border border-red-700 overflow-hidden bg-black'
                style={{
                    boxShadow: '0 0 30px rgba(220, 38, 38, 0.4), 0 0 60px rgba(220, 38, 38, 0.2)'
                }} 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >   
                <div className='p-2'>
                    <NeonText>
                        <h1 className='text-sm uppercase whitespace-nowrap'>{experience.jobTitle}</h1>
                    </NeonText>

                    <p className='text-xs text-gray-400 mb-2 mt-3'>
                        {experience.company} • {experience.type}
                    </p>

                    <p className='text-xs text-gray-500 mb-2'>
                        {monthNumToAbbrev(experience.startMonth)} {experience.startYear} - {monthNumToAbbrev(experience.endMonth)} {experience.endYear || ''}
                    </p>
                    
                    <p className='text-xs text-gray-500 mb-4'> {experience.location}</p>
                    
                    <NeonLine className='mb-4'/>
                    <ul className='list-disc pl-5 space-y-2'>
                        {experience.description.map((item, index) => (
                            <li key={index} className='text-sm text-gray-300 leading-relaxed'>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard
