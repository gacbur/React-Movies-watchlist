import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faTimes, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { MoviesGlobalContext } from '../context/MoviesGlobalContext'


const MovieControls = ({ movie, type }) => {

    const
        { removeMovieFromWatchlist,
            addToWatched,
            removeMovieFromWatched,
            moveBackToWatchlist
        } = useContext(MoviesGlobalContext)

    return (
        <div className="inner-card-controls">
            {type === 'watchlist' && (
                <>
                    <button
                        onClick={() => addToWatched(movie.imdbID, movie)}
                        className="ctrl-btn">
                        <FontAwesomeIcon icon={faEye} />
                    </button>
                    <button
                        onClick={() => removeMovieFromWatchlist(movie.imdbID)}
                        className="ctrl-btn">
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </>
            )}
            {type === 'watched' && (
                <>
                    <button
                        onClick={() => moveBackToWatchlist(movie.imdbID, movie)}
                        className="ctrl-btn">
                        <FontAwesomeIcon icon={faEyeSlash} />
                    </button>
                    <button
                        onClick={() => removeMovieFromWatched(movie.imdbID)}
                        className="ctrl-btn">
                        <FontAwesomeIcon icon={faTimes} />
                    </button>

                </>
            )
            }
        </div >
    )
}

export default MovieControls
