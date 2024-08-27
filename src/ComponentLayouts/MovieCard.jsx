import {React} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function MovieCard({ movie }) {
    const navigate = useNavigate();
    const imageUrl = "https://image.tmdb.org/t/p/w500/";

    const handleMoreDetails = () => {
        navigate(`/Movies/${movie.id}`);
      };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`${imageUrl}${movie.poster_path}`} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          {movie.overview}
        </Card.Text>
         <Button variant="primary" onClick={handleMoreDetails}>More Details</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
