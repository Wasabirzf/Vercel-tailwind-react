import React, { useState } from 'react'
import { useNavigate , Link } from 'react-router-dom';


export const Corp = ({ setNom }) => {

    const [saisie, setSaisie] = useState('');
    const [erreur,setErreur] = useState('');
        const navigate = useNavigate();
    
        const handleSubmit = (e) => {
            e.preventDefault();

            if (saisie.trim() === '') {
                setErreur('Le champs ne peut pas etre vide');
            } else {
                navigate('/FirstPage');
            }
        };

  return (
    <div className='mb-10'>
        <div className='flex justify-center p-2'>
            <h1 className='font-bold text-2xl text-white'>Bonjour</h1>
        </div>
        <div className='flex justify-center'>
        <p className='text-white text-sm'>Créez un User vite fais</p>
        </div>
        <form onSubmit={handleSubmit}>
            <label>
                <div className='flex justify-center mt-10'>
                    <input type="text" placeholder='Nom' className='w-64 h-11 p-3 rounded-lg sm:w-96 ' />
                </div>
            <div className='flex justify-center mt-4'>
                <input 
                type="text"
                value={saisie} 
                onChange={(e) => {setSaisie(e.target.value);
                if (erreur) 
            setErreur('');}}
                placeholder='ID ou Identification'
                className='w-64 h-12 p-3 rounded-lg sm:w-96 ' />
            </div>
            </label>

            <div className='flex justify-center m-3'>
            {erreur && <p style={{color:'red'}}>{erreur}</p>}
            </div>

            <div className='flex justify-center'>
            <button type="submit" className='bg-emerald-500 w-64 sm:w-1/4 h-10 rounded-xl text-white'>Terminé</button>
            </div>
        </form>
    </div>
  )
}
