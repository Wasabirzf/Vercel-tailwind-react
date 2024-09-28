import React from 'react'
import Header from '../components/Header';

const SecondPage = () => {
  const Grid = () => (
    <div className='absolute inset-0 bg-gray-900'>
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] []mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]' />
    </div>
  );
  return (
    <div>
      <div className='min-h-screen bg-gray-900 text-gray-100 relative overflow-hidden'>
      <Header />
        <Grid />

        <div className='relative z-10'>
          <main className='container mx-auto px-4 py-16 max-w-7xl'>
            {/* Hero */}
            <div className='text-center mb-20'>
              <h1 className=' text-4xl sm:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-500 to text-teal-600'
              >Haikanto.Co
              </h1>
              <p className='text-2xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed'>
                <span className='underline decoration-wavy text-2xl decoration-green-400 text-green-400 font-bold underline-offset-4'>Haikanto</span> est un page web de prototypage créé par <span className='bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent font-bold'> Tahina</span>.
              </p>
            </div>
          </main>
          <main className='text-center mt-10'>
           <p className='text-lg'>Guys, j'ai envie de créer un language de programmation ou un serveur virtuel !</p>
           <p className='text-lg'>Je vais appeler le serveur virtuel <span className='text-red-600 font-bold'>"Volt"</span> , ça n'a aucune raison hahaha. Et le language <span className='text-blue-600 font-bold'>"Stack"</span>.</p>
          </main>
          <footer className='min-h-screen mt-48 sm:mt-0'>
          <h1 className='p-4 text-center text-sm'>UNDER CONSTRUCTION...</h1>
          <h1 className='p-2 text-center text-sm'>Made with React and Tailwind</h1>
          </footer>
         
        </div>
      </div>
    </div>
  )
}

export default SecondPage