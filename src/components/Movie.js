import React, { useContext } from 'react'
import { MoviesGlobalContext } from '../context/MoviesGlobalContext'

const Movie = ({ movie }) => {

    const { addMovieToWatchlist, watchlist, addToWatched, watched } = useContext(MoviesGlobalContext)

    let storedMovie = watchlist.find(el => el.imdbID === movie.imdbID)
    let storedMovieWatched = watched.find(el => el.imdbID === movie.imdbID)

    const watchlistDisabled = storedMovie
        ? true
        : storedMovieWatched
            ? true
            : false

    const watchedDisabled = storedMovieWatched ? true : false

    return (
        <div className="movie-cnt">
            <div className="movie-poster">
                <img src={movie.Poster} alt={`${movie.Title} poster`}></img>
            </div>
            <div className="movie-details">
                <h3>{movie.Title}</h3>
                <h5>{movie.Year}</h5>
            </div>
            <div className="movie-add-watchlist">
                <button
                    disabled={watchlistDisabled}
                    onClick={() => addMovieToWatchlist(movie)}>Add to Watchlist</button>
                <button
                    disabled={watchedDisabled}
                    onClick={() => addToWatched(movie.imdbID, movie)}>Add to Watched</button>
            </div>

        </div>
    )
}

export default Movie
