import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import { Home, CreatePost } from './pages';

const App = () => (
  <BrowserRouter>
   <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4  border-b border-b-yellow-50 '>
    <Link to="/" >
      <img  src={logo}  alt="logo"  className='w-28 object-contain' />
    </Link>

    <Link to="/Create-Post" className='bg-blue-400 px-4 py-2 text-white font-inter font-medium rounded-md'>Create
    </Link>
   </header>
   <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Create-Post' element={<CreatePost/>} />



       </Routes>
   </main>
  </BrowserRouter>
);

export default App;