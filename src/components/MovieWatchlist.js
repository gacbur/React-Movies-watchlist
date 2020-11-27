import React from 'react'
import MovieControls from './MovieControls'

const MovieWatchlist = ({ movie, type }) => {

    return (
        <div className="Watchlist-movie-card">
            <div className="overlay">
                <MovieControls className="overlay-icons" type={type} movie={movie} />
            </div>
            <img src={movie.Poster} alt={`${movie.Title} poster`}></img>
        </div>
    )
}

export default MovieWatchlist
