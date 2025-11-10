import React from 'react'
import { Drone } from 'lucide-react'
import { NAV_ITEMS } from '../constants/constants'

const Navbar = () => {
  return (
    <header className='w-full py-5 px-8 lg:px-16'>
        <nav className='flex w-full items-center'>
            <Drone className='text-red-700'/>
            <div className='flex gap-8 items-center max-sm:hidden mx-auto'>
                {NAV_ITEMS.map((item) => (
                    <a 
                      key={item} 
                      href={`#${item.toLowerCase()}`}  
                      className='text-sm cursor-pointer text-gray-400 hover:text-white transition-all'
                    >
                        {item}
                    </a>
                ))}
            </div>
        </nav>
    </header>
  )
}

export default Navbar
