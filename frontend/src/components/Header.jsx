import React from 'react'

const Header = () => {
  return (
    <div className='mt-24'>
        <header className='fixed top-0 left-0 right-0 z-50 py-4 bg-gray-800/70 backdrop-blur-md border-b border-green-500/20 shadow-lg'>
        <div className='container mx-auto px-4 max-w-6xl flex flex-wrap justify-between items-center'>
            <div href='/' className='text-xl font-bold text-white flex items-center'>
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600'>
                    Haikanto.Co
                </span>
                <span className='text-xs bg-teal-500 text-white px-2 ml-2 rounded'>Proto</span>
            </div>
        </div>
      </header>
    </div>
  )
}

export default Header