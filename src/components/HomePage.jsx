
import React, { useContext } from 'react';
import MovieCard from '../ComponentLayouts/MovieCard';
import { MovieContext } from '../Context/MovieProvider';

export default function HomePage() {
  const { movies } = useContext(MovieContext); 

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'flex-start' }}>
      {Array.isArray(movies) && movies.length > 0 ? ( 
        movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))
      ) : (
        <p>No movies available</p> 
      )}
    </div>
  );
}
