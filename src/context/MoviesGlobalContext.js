import React, { createContext, useState, useEffect } from 'react'

const initialState = {
    watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],
    watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [],
}

export const MoviesGlobalContext = createContext(initialState)

export const MoviesGlobalContextProvider = props => {
    const [watchlist, setWatchlist] = useState(initialState.watchlist)
    const [watched, setWatched] = useState(initialState.watched)

    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(watchlist))
        localStorage.setItem('watched', JSON.stringify(watched))
    }, [watchlist, watched])


    const addMovieToWatchlist = (movie) => {
        setWatchlist([...watchlist, movie])
    }

    const removeMovieFromWatchlist = (id) => {
        setWatchlist(watchlist.filter(movie => movie.imdbID !== id))
    }

    const addToWatched = (id, movie) => {
        setWatchlist(watchlist.filter(movie => movie.imdbID !== id))
        setWatched([...watched, movie])
        console.log(watched)
    }

    const removeMovieFromWatched = (id) => {
        setWatched(watched.filter(movie => movie.imdbID !== id))
    }

    const moveBackToWatchlist = (id, movie) => {
        setWatched(watched.filter(movie => movie.imdbID !== id))

        setWatchlist([...watchlist, movie])
    }


    return (
        <MoviesGlobalContext.Provider value={{
            watchlist,
            watched,
            addMovieToWatchlist,
            removeMovieFromWatchlist,
            addToWatched,
            removeMovieFromWatched,
            moveBackToWatchlist
        }}>
            {props.children}
        </MoviesGlobalContext.Provider>
    )
}

