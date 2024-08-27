// MovieProvider.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7')
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const addMovie = (newMovie) => {
    setMovies(prevMovies => [...prevMovies, newMovie]);
  };

  return (
    <MovieContext.Provider value={{ movies, addMovie }}>
      {children}
    </MovieContext.Provider>
  );
};
