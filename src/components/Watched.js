import React, { useContext } from 'react'
import { MoviesGlobalContext } from '../context/MoviesGlobalContext'
import MovieWatched from './MovieWatched'

const Watched = () => {

    const { watched } = useContext(MoviesGlobalContext)

    return (
        <div className="watchlist-cnt">
            <div className="watchlist-content-cnt">
                <div className="watchlist-header">
                    <h1 className="watchlist-heading">{watched.length > 0 ? `Movies that I Watched ...` : <div className="nomovies-header">Found no movies for now in Watched...</div>}</h1>
                </div>
                {watched.map(movie => (
                    <MovieWatched key={movie.imdbID} movie={movie} type="watched" />
                ))}
            </div>
        </div>
    );
}

export default Watched
