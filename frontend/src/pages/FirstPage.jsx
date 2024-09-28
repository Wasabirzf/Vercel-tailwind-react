import React from 'react'
import Header from '../components/Header'
import SecondPage from './SecondPage'
import { useNavigate } from 'react-router-dom'
import Others from '../utils/Others'


const FirstPage = ({ nom }) => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };


  return (
    <div>
        <Header />
        <h1 className='text-white font-bold text-sm sm:text-xl p-10 justify-center flex'>Quel est votre region ?</h1>
        <div className='flex flex-col items-center'> 
        <button onClick={() => handleClick('/SecondPage')} className='mb-2 rounded-lg w-60 h-11 bg-black ml-5 text-white mr-4'>Antananarivo </button>
        <button onClick={() => handleClick('/SecondPage')}
        className='mb-2 rounded-lg w-60 h-11 bg-black ml-5 text-white mr-4'>Toamasina </button>
        <button onClick={() => handleClick('/SecondPage')}
        className='mb-2 rounded-lg w-60 h-11 bg-black ml-5 text-white mr-4'>Toliara  </button>
       <button onClick={() => handleClick('/SecondPage')}
       className='mb-2 rounded-lg w-60 h-11 bg-black ml-5 text-white mr-4'>Fianarantsoa </button>
       <button onClick={() => handleClick('/SecondPage')}
       className='mb-2 rounded-lg w-60 h-11 bg-black ml-5 text-white mr-4'>Antsiranana </button>
       <button onClick={() => handleClick('/SecondPage')}
       className='mb-2 rounded-lg w-60 h-11 bg-black ml-5 text-white mr-4'>Mahajanga </button>
        </div>
        <hr className='absolute bottom-10'/>
        <Others />
    </div>
  )
}

export default FirstPage