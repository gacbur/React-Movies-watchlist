import React, { useContext } from 'react'
import { MoviesGlobalContext } from '../context/MoviesGlobalContext'
import MovieWatchlist from './MovieWatchlist';

const Watchlist = () => {

    const { watchlist } = useContext(MoviesGlobalContext)

    return (
        <div className="watchlist-cnt">
            <div className="watchlist-content-cnt">
                <div className="watchlist-header">
                    <h1 className="watchlist-heading">{watchlist.length > 0 ? `Movies that I Watched ...` : <div className="nomovies-header">Found no movies for now in Watchlist...</div>}</h1>
                </div>
                {watchlist.map(movie => (
                    <MovieWatchlist key={movie.imdbID} movie={movie} type="watchlist" />
                ))}
            </div>
        </div>
    );
}

export default Watchlist;