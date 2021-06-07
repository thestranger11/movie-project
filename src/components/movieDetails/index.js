import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import {MovieDetailed} from '../../common/styles'
import MovieField from './movieField';
import Breadcrumb from '../breadcrumb';


const MovieDetails = (props) => {
    const [movie, setMovie] = useState();
    const movieId = props.match.params.movieId;
  
    useEffect(() => {
      const fetchMovie = async () => {
        await axios.get('http://www.omdbapi.com/', {
            params: {
                apikey: 'b4ff107b',
                i: `${movieId}`,
                plot: 'full'
            }
        }).then(res => {
            const data = res.data;
            setMovie(data);
        });
      };
      fetchMovie();
    }, [movieId]);
  
    return (
      <>
        {movie && (
            <MovieDetailed id="movieId" >
              <div className="background" style={{backgroundImage: `url(${movie.Poster})`}} />
              <div className="container">
                <Breadcrumb />
                <div className="image-container">
                    <img src={movie.Poster} alt={movie.Title+"_image"} />
                </div>
                <div className="details">
                  <h1>{movie.Title}</h1>
                  <MovieField label="Genre" value={movie.Genre} />
                  <MovieField label="Year" value={movie.Year} />
                  {/* <div className="movie-field"><label>Genre: </label>{movie.Genre}</div> */}
                  {/* <div className="movie-field"><label>Year: </label>{movie.Year}</div> */}
                  <div className="movie-field"><label>Imdb Rating: </label>{movie.imdbRating}</div>
                  <div className="movie-field"><label>Imdb Votes: </label>{movie.imdbVotes}</div>
                  <div className="movie-field"><label>Released: </label>{movie.Released}</div>
                  <div className="movie-field"><label>Runtime: </label>{movie.Runtime}</div>
                  <div className="movie-field"><label>Actors: </label>{movie.Actors}</div>
                  <div className="movie-field"><label>Country: </label>{movie.Country}</div>
                  <div className="movie-field"><label>Language: </label>{movie.Language}</div>
                  <div className="movie-field"><label>Awards: </label>{movie.Awards}</div>
                  <div className="movie-field"><label>BoxOffice: </label>{movie.BoxOffice}</div>
                  <div className="movie-field"><label>Director: </label>{movie.Director}</div>
                  <div className="movie-field"><label>Writer: </label>{movie.Writer}</div>
                </div>
                <div className="plot movie-field">
                  <label>Plot: </label>
                  {movie.Plot}
                </div>
              </div>
            </MovieDetailed>
        )}
      </>
    );
};

export default MovieDetails;