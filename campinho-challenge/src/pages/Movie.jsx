import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom'

import {
  BsCameraReels,
  BsArrowUp,
  BsHourglassSplit,
  BsChatLeftDotsFill,
} from "react-icons/bs";

import Card from '../components/Card';

import './Movie.css';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  const getMovie = async (url) => {
    const response = await axios.get(url);
    setMovie(response.data)

    console.log(response.data)
  };
  const format = (num) => {
    return num.toLocaleString("en-US", {
      style:"currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const prodUrl = `${moviesURL}${id}?${apiKey}`;
    getMovie(prodUrl)
  }, []);

  return (
  <div className='page-movie'>
    {movie && (
         <>
         <Card movie={movie} showLink={false} />
         <p className="tagline">{movie.tagline}</p>
         <div className="info">
          <h3>
            <BsArrowUp /> Budgeting:
          </h3>
            <p>{format(movie.budget)}</p>
         </div>

         <div className="info">
          <h3>
            < BsCameraReels /> Sales:
          </h3>
            <p>{format(movie.revenue)}</p>
         </div>

         <div className="info">
          <h3>
            <BsHourglassSplit /> Duration:
          </h3>
            <p>{movie.runtime} {"minutes"}</p>
         </div>

         <div className="info description">
          <h3>
            <BsChatLeftDotsFill /> Description:
          </h3>
            <p>{movie.overview}</p>
         </div>

         <div >
         <Link className='backHome' to="/">Back to Home</Link>
         </div>
        </>
         
    )}
  </div>
  );

};


export default Movie