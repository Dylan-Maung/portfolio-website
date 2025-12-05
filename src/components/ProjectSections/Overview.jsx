import React from 'react'

const Overview = ({details}) => {
  return (
    <div className=' w-full h-full flex flex-col gap-10 '>
      <div className='w-full text-sm'>
        <h3 className='text-2xl mb-4 uppercase border-b border-gray-400'>Overview</h3>
        {details.fullDescription.map((paragraph, i) => (
          <p key={i} className='mb-2 [text-indent:2rem] leading-relaxed'>{paragraph}</p>
        ))}
      </div>

      <div className='w-full text-sm'>
        <h2 className='text-2xl mb-4 uppercase border-b border-gray-400'>Key Features</h2>
        <ul className='columns-2 gap-8'>
          {details.features.map((feature, i) => (
            <li key={i} className='mb-4'>▸  {feature}</li>
          ))}
        </ul>
      </div>

      <div className='w-full flex gap-10'>
        <div>
          <span className='text-sm border-b border-gray-400'>ROLE:</span>
          <p className='text-gray-400 text-lg mt-1'>{details.role}</p>
        </div>
        {details.team && (
          <div>
            <span className='text-sm border-b border-gray-400'>TEAM:</span>
            <p className='text-gray-400 text-lg mt-1'>{details.team}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Overview
