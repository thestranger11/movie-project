import React, { Component } from 'react';
import Slider from "react-slick";

import Movie from './Movie';
import { fetchMovie } from '../api/fetchMovie';
import { Title, Container } from '../../common/styles';

class MovieList extends Component  {
    
    constructor(){
        super()
        this.state = {  }
    }
    
    async componentDidMount(){
        this.mounted = true;
        const data = await fetchMovie('harry');
        if(this.mounted){
            this.setState({ data });
        }
    }
    componentWillUnmount(){
        this.mounted = false;
    }
    render(){
        const movies = Object.values(this.state)[0];
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            autoPlay: true,
            centerMode: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerPadding: '10px'
        };
        return (
                <Container>
                    <Title>Featured Movies</Title>
                    {movies && (
                        <Slider {...settings}>
                            {Object.values(movies)[0].map
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
                        </Slider>
                    )}
                </Container>
        );
    }
    
};

export default MovieList;