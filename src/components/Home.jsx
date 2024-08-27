import React, { useContext } from 'react';
import NavBar from './navBar';
import { Outlet } from 'react-router-dom';

import MovieCard from '../ComponentLayouts/MovieCard'; 

import { MovieContext } from '../Context/MovieProvider';

export default function Home() {
  const movies = useContext(MovieContext);

  return (
   <>

<div>
      
      <NavBar />  
      <Outlet />
    </div>
   </> 

  );
}
