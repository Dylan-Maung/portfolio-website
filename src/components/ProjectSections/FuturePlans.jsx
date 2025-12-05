import React from 'react'

const FuturePlans = ({details}) => {
  return (
    <div className=' w-full h-full flex flex-col gap-10 '>
      <div className='w-full text-sm'>
        <h3 className='text-2xl mb-4 uppercase border-b border-gray-400'>Next Steps</h3>
        <p className='mb-2 [text-indent:2rem] leading-relaxed'>{details.nextSteps.introduction}</p>
      </div>

      <div className='w-full text-sm'>
        <h2 className='text-2xl mb-4 uppercase border-b border-gray-400 text-red-600'>Planned Enhancements</h2>
        <ul className='gap-8'>
          {details.nextSteps.futureFeatures.map((feature, i) => (
            <li key={i} className='mb-4'>▸  {feature}</li>
          ))}
        </ul>
      </div>

      <div className='w-full text-sm'>
        <h3 className='text-2xl mb-4 uppercase border-b border-gray-400'>Expected Benefits</h3>
        <p className='mb-2 [text-indent:2rem] leading-relaxed'>{details.nextSteps.impact}</p>
      </div>
    </div>
  )
}

export default FuturePlans
