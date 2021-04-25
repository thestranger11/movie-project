import React from 'react';
import MovieList from '../components/movieList/MovieList';
import Search from '../components/search';

const Movie_details = (props) => {
    return (
        <div>
            <Search />
            <MovieList />
        </div>
    );
};

export default Movie_details;