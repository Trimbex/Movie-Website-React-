import React from 'react'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import AddMovie from './components/AddMovie'; 
import ContactUs from './components/ContactUs';
import { MovieProvider } from './Context/MovieProvider';
import HomePage from './components/HomePage'
import MovieDetails from './components/MovieDetails'


import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home /> ,

      children: [
      { index: true, element: <HomePage /> },
      {
        path: "/About",
        element: <About /> , 
      }
      ,
      {
        path: "/add-movie", 
        element: <AddMovie />,
      },
      {
        path: "/contact-us", 
        element: <ContactUs />,
      },
      {
        path: "/movies/:id", 
        element: <MovieDetails />,
      }
      ]
    }
       
    
  ]);

  return (
    <MovieProvider>
    <RouterProvider router={router}> 
    </RouterProvider>

    
    </MovieProvider>
   
  );
}
