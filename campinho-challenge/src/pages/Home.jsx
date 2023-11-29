import { useState, useEffect } from 'react';
import axios from 'axios';

import Card from '../components/Card';
import '../pages/ContainerGrid.css';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [bestMovies, setBestMovies] = useState([])

  const getBestClassMovies = async (url) => {
    try {
      const response = await axios.get(url);
      setBestMovies(response.data.results)

      setBestMovies(response.data.results);

    } catch (error) {
      console.error('Ocorreu um erro:', error);
    }

    
  };

  useEffect(() => {
    const bestMoviesUrl = `${moviesURL}top_rated?${apiKey}`;
  
   getBestClassMovies(bestMoviesUrl)

  }, [])


    return (
    <div className='container'>
      <h2 className="title">Best Movies:</h2>
      <div className="movies-container">
        {bestMovies.length === 0 && <p>Carregando</p>}
      {bestMovies.length > 0 && bestMovies.map((movie) => <Card key={movie.id} movie={movie} /> )}
      </div>
    </div>
    );
};

export default Home