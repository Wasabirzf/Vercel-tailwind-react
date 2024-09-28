import { Route, Routes } from 'react-router-dom';
import HomePage from './home/HomePage'
import  FirstPage  from './pages/FirstPage';
import { useState } from 'react';
import SecondPage from './pages/SecondPage';


function App() {
  const [nom, setNom] =  useState('');
  return (

    <div>
      <Routes>
        <Route path='/' element={<HomePage setNom={setNom} />} /> 
        <Route path='/FirstPage' element={<FirstPage nom={nom} />} />
        <Route path='/SecondPage' element={<SecondPage />} />
      </Routes>

    {/* <HomePage /> */}
    </div>
  );
}

export default App
