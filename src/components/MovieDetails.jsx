// MovieDetails.jsx
import React, { useState, useEffect, useContext } from 'react';
import { MovieContext } from '../Context/MovieProvider';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MovieDetails() {
  const { id } = useParams();
  const { movies } = useContext(MovieContext); // Destructure movies from context
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (movies && id) {
      const selectedMovie = movies.find(movie => movie.id.toString() === id);
      setMovie(selectedMovie);
    }
  }, [id, movies]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <h1>Movie Details</h1>
      <div className="card">
        <div className="card-header">
          <h2>{movie.title}</h2>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-4">
              <img 
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                alt={movie.title} 
                className="img-fluid" 
              />
            </div>
            <div className="col-md-8">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th>ID</th>
                    <td>{movie.id}</td>
                  </tr>
                  <tr>
                    <th>Original Title</th>
                    <td>{movie.original_title}</td>
                  </tr>
                  <tr>
                    <th>Overview</th>
                    <td>{movie.overview}</td>
                  </tr>
                  <tr>
                    <th>Release Date</th>
                    <td>{movie.release_date}</td>
                  </tr>
                  <tr>
                    <th>Vote Average</th>
                    <td>{movie.vote_average}</td>
                  </tr>
                  <tr>
                    <th>Vote Count</th>
                    <td>{movie.vote_count}</td>
                  </tr>
                  <tr>
                    <th>Popularity</th>
                    <td>{movie.popularity}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
