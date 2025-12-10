import React from 'react'

const MyRole = ({details}) => {
  return (
    <div className='w-full h-full'>
      <div className='w-full flex flex-col items-center text-center gap-3 mb-8'>
        <h3 className='text-2xl font-bold'>{details.role}</h3>

        <p className='w-4/5 text-gray-400'>{details.contributions.responsibilities}</p>
      </div>
      
      <div className='w-full mb-8'>
        <h3 className='text-2xl border-b mb-8'>Key Contributions</h3>

        <ul className='gap-8'>
          {details.contributions.accomplishments.map((accomplishment, i) => (
            <li key={i} className='mb-8'>▸  {accomplishment}</li>
          ))}
        </ul>
      </div>
      
      <div className='w-full flex flex-col items-center'>
        <h3 className='w-full flex justify-center text-2xl border-b mb-8'>Tech Stack</h3>
        <div className='flex flex-wrap gap-8'>
          {details.techStack.map((tech, i) => (
            <span 
              key={i} 
              className='px-8 py-2 text-xs border-2 border-magenta-500 text-magenta-400 font-mono font-bold hover:shadow-[0_0_40px_rgba(220,38,38,0.6)]'
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
  )
}

export default MyRole

