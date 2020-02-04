import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
    render() {
        return (
            <div>
                <h1>Hello this is App movie</h1>
                <MoviePoster/>
            </div>
        );
    }
}

class MoviePoster extends Component {
    render() {
        return (
            <img src="https://m.media-amazon.com/images/M/MV5BMTcxNDI2NDAzNl5BMl5BanBnXkFtZTgwODM3MTc2MjE@._V1_.jpg"/>
        )
    }
}

export default Movie