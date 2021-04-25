import React, { Component } from 'react';
import Movie from './movieList/Movie';
import { fetchMovie } from './api/fetchMovie';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Container, MoviesHorizontalList, SearchInput } from '../common/styles';

class Search extends Component  {
    
    constructor(){
        super()
        this.state = { query: '', movies: '' }
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch = async (e) => {
        if(e.key === 'Enter') {
            const data = await fetchMovie(this.state.query);
            this.setState({ movies: data.Search, query: ''});
            console.log(this.state.movies)
        }
    }

    render(){
        const movies = this.state.movies;
        return (
                <div className="search-container">
                    <SearchInput
                        type="text"
                        className="search"
                        placeholder="Search by name"
                        value={this.state.query}
                        onChange={(e) => this.setState({query: e.target.value})}
                        onKeyPress={this.handleSearch}
                    />
                    {movies && (
                        <MoviesHorizontalList>
                            <div className="movie-list-wrapper">
                                {movies.map
                                (item => { 
                                    return (
                                        <Movie
                                            Title={item.Title}
                                            imdbID={item.imdbID}
                                            Poster={item.Poster}
                                            Year={item.Year}
                                            Type={item.Type}
                                            key={item.imdbID}
                                            movieId={item.imdbID}
                                        />
                                    )
                                })}
                            </div>
                        </MoviesHorizontalList>
                    )}
                </div>
        );
    }
    
};

export default Search;