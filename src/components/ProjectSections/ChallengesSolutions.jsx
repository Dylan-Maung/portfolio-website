import React from 'react'
import NeonText from '../ui/NeonText'

const ChallengesSolutions = ({details}) => {
  return (
    <div className='w-full h-full flex flex-col'>
      <div>
        <h3 className='w-full text-2xl mb-4 uppercase border-b border-gray-400'>Challenges & Solutions</h3>
      </div>

      <div className='w-full flex flex-col mt-6 gap-6'>
        {details.challengesSolutions.challenges.map((challenge, i) => (
          <div key={i} className='w-full grid grid-cols-[1fr_auto_1fr]'>
            <div className='border border-red-700 p-4'>
              <p className='font-bold mb-2'>Challenge {i+1}:</p>
              <p className='text-red-400 leading-relaxed'>{challenge}</p>
            </div>
            
            <NeonText className='flex items-center text-2xl ml-2 mr-2'>
              <div>→</div>
            </NeonText>

            <div className='border border-purple-600 p-4'>
            <p className='font-bold mb-2 text-purple-300'>Solution {i+1}:</p>
            <p className='text-gray-300 leading-relaxed'>{details.challengesSolutions.solutions[i]}</p>
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChallengesSolutions
