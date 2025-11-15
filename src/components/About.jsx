import { useGSAP } from '@gsap/react'
import React from 'react'
import { fadeInFromLeft, fadeInFromRight, fadeInFromBottom } from '../utils/animations'
import NeonText from './ui/NeonText'
import NeonLine from './ui/NeonLine'

const About = () => {
    useGSAP(() => {
        fadeInFromLeft('#picture', {duration: 2})
        fadeInFromRight('#intro', {duration: 2})
        fadeInFromBottom('.education-card', {duration: 1, stagger: 0.2})
    }, [])

    return (
        <section id="about" className='w-full min-h-screen overflow-hidden pt-20'>
            <div className='flex flex-col md:flex-row w-full justify-center gap-8 mb-16 pt-2'>
                <div id="picture" className='w-64 h-64 flex border-2 border-red-950 shadow-[0_0_20px_rgba(220,38,38,0.3)] rounded-full items-center justify-center flex-shrink-0 overflow-hidden'>
                    <img src={`${import.meta.env.BASE_URL}profile.jpeg`} alt="Portfolio Picture" className='w-full h-full object-cover'/>
                </div>

                <div id="intro" className='max-w-2xl border border-red-400 text-left p-6'
                    style={{
                        boxShadow: '0 0 30px rgba(220, 38, 38, 0.4), 0 0 60px rgba(220, 38, 38, 0.2)'
                    }}
                >
                    <NeonText>
                        <p className='mb-4 indent-8'>
                            Hi, I'm Dylan, a recent computer engineering graduate drawn to the complexity of machine learning and AI. I'm fascinated by how mathematical models can learn and make decisions through neural networks — it's a puzzle I can't stop trying to understand.
                        </p>
                        <p className='indent-8'>
                            When I'm not debugging code or training models, you'll find me at the climbing gym working through boulder problems. Turns out I like solving puzzles whether they're in Python or on a wall.
                        </p>
                    </NeonText>
                </div>
            </div>
            
            <div className='w-full h-1/2 flex flex-col justify-center items-center gap-8'>
                <NeonText>
                    <h1 className='text-4xl md:text-6xl font-bold uppercase'> Education </h1>
                </NeonText>

                <article className='education-card w-3/4 border border-red-400 p-6' 
                    style={{
                        boxShadow: '0 0 30px rgba(220, 38, 38, 0.4), 0 0 60px rgba(220, 38, 38, 0.2)'
                    }}
                >
                    <NeonText as="h3" className='text-xl font-bold mb-2 uppercase'>
                        Bachelor of Science in Computer Engineering
                    </NeonText>
                    
                    <p className='text-gray-400 text-sm'>
                        University of California - Santa Cruz • September 2022 - December 2024 | GPA 3.5
                    </p>
                    
                    <NeonLine className='my-4'></NeonLine>

                    <div className='mt-4'>
                        <p className='text-white font-semibold text-sm mb-2'>Honors & Activities:</p>
                        <ul className='list-disc ml-6 text-sm text-gray-300'>
                            <li>Dean's Honor List - Winter 2023, Spring 2024, Fall 2024</li>
                            <li>Men's Club Volleyball - Outside Hitter</li>
                        </ul>
                    </div>
                </article>

                <article className='education-card w-3/4 min-h-64 border border-red-400 p-6'
                    style={{
                        boxShadow: '0 0 30px rgba(220, 38, 38, 0.4), 0 0 60px rgba(220, 38, 38, 0.2)'
                    }}
                >
                    <NeonText className='text-xl font-bold mb-2 uppercase'>
                        <h3>General Studies / Computer Engineering Prerequisites</h3>
                    </NeonText>
                    
                    <p className='text-gray-400 text-sm'> 
                        City College of San Francisco • August 2020 - July 2022
                    </p>
                    
                    <NeonLine className='my-4'></NeonLine>

                    <div className='mt-4'>
                        <p className='text-white font-semibold text-sm mb-2'>Honors & Activities:</p>
                        <ul className='list-disc ml-6 text-sm text-gray-300'>
                            <li>Dean's Honor List - Fall 2020, Spring 2021</li>
                        </ul>
                    </div>
                </article>

                <article className='education-card w-3/4 border border-red-400 p-6'
                    style={{
                        boxShadow: '0 0 30px rgba(220, 38, 38, 0.4), 0 0 60px rgba(220, 38, 38, 0.2)'
                    }}
                >
                    <NeonText className='text-xl font-bold mb-2 uppercase'>
                        <h3>Relevant Coursework:</h3>
                    </NeonText>

                    <NeonLine className='my-4'></NeonLine>

                    <ul className='list-disc grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-300 p-2'>
                        <li>Data Structures and Algorithms</li>
                        <li>Applied ML: Deep Learning</li>
                        <li>Software Design Accelerated</li>
                        <li>Full Stack Web Development</li>
                        <li>Intro to Software Engineering</li>
                        <li>Parallel Programming</li>
                        <li>Computer System Design</li>
                        <li>Embedded System Design</li>
                        <li>Computer Architecture</li>
                        <li>Probability & Statistics for Engineers</li>
                    </ul>
                </article>
            </div>

        </section>
    )
}

export default About
