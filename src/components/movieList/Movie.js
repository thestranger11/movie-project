import React from 'react';
import { Link } from 'react-router-dom';
import noImage from '../../assets/watch-movie.svg'
import { MovieCard } from '../../common/styles';

const Movie = (props) => {
    return (
        <MovieCard id={props.imdbID}>
            <Link to={`/movies/${props.movieId}`}>
                <h3>{props.Title}</h3>
                <img src={`${props.Poster === "N/A" ? noImage : props.Poster}`}
                    alt={props.Title} 
                    className={`${props.Poster === "N/A" && "no-image"}`}
                />
                <div className="movie-details">
                    <span className="year"><label>Year: </label>{props.Year}</span>
                    <span className="type"><label>Type: </label>{props.Type}</span>
                </div>
            </Link>
        </MovieCard>
    );
};

export default Movie;