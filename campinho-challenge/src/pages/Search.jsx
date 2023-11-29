import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Card from '../components/Card';
import axios from 'axios';

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

import '../pages/ContainerGrid.css'


const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getFindMovie = async (url) => {

      const response = await axios.get(url);
      setMovies(response.data.results)
  
  };
  useEffect(() => {
    const keySearchURL = `${searchURL}?${apiKey}&query=${query}`;
  
  getFindMovie(keySearchURL);

  }, [query]);

    return (
      <div className="container">
        <h2 className="title">
          Resultados para: <span className="query-text">{query}</span>
        </h2>
        <div className="movies-container">

          {movies.length > 0 &&
            movies.map((movie) => <Card key={movie.id} movie={movie} />)}
        </div>
      </div>
    );
  };

  export default Search