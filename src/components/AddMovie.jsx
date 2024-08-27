// AddMovie.jsx
import React, { useState, useContext } from 'react';
import { MovieContext } from '../Context/MovieProvider';

export default function AddMovie() {
  const [title, setTitle] = useState('');
  const [overview, setOverview] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [posterPath, setPosterPath] = useState('');

  const { addMovie } = useContext(MovieContext); 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('New Movie:', { title, overview, releaseDate, posterPath });

    const newMovie = {
      title,
      overview,
      release_date: releaseDate,
      poster_path: posterPath,
    };

    addMovie(newMovie);

    setTitle('');
    setOverview('');
    setReleaseDate('');
    setPosterPath('');
  };

  return (
    <div className="container mt-4">
      <h1>Add New Movie</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="overview">Overview</label>
          <textarea
            className="form-control"
            id="overview"
            rows="3"
            value={overview}
            onChange={(e) => setOverview(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="releaseDate">Release Date</label>
          <input
            type="date"
            className="form-control"
            id="releaseDate"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="posterPath">Poster Path</label>
          <input
            type="text"
            className="form-control"
            id="posterPath"
            value={posterPath}
            onChange={(e) => setPosterPath(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Add Movie</button>
      </form>
    </div>
  );
}
