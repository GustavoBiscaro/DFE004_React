import { Link } from 'react-router-dom'
import {FaStar} from 'react-icons/fa'

const imageUrl = import.meta.env.VITE_IMG;

import './Card.css'

const Card = ({movie, showLink = true}) => {
  return <div className="movie-card">
    <img src={imageUrl + movie.poster_path } alt={movie.title} />
    <p>{movie.title}</p>
    <p>
      <FaStar/> {movie.vote_average}
    </p>

    {showLink && <Link to={`/movie/${movie.id}`}>Details</Link>}
  </div>
}

export default Card