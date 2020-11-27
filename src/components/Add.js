import React, { useState, useEffect } from 'react'
import Movie from './Movie'

const Add = () => {

    const [movies, setMovies] = useState([])
    const [searchValue, setSearchValue] = useState('')

    const getMoviesAPI = async (searchValue) => {

        const API = `http://www.omdbapi.com/?s=${searchValue}&apikey=8fa3b031`

        const response = await fetch(API)
        const responseJson = await response.json()
        if (responseJson.Search) {
            setMovies(responseJson.Search)
            console.log(responseJson.Search)
        }

    }

    useEffect(() => {
        getMoviesAPI(searchValue)
    }, [searchValue])


    return (
        <div className="add-cnt">
            <div className="add-search-cnt">
                <div className="search-input">
                    <input
                        type="text"
                        value={searchValue}
                        placeholder="Search for movie..."
                        onChange={(e) => setSearchValue(e.target.value)}
                    ></input>
                </div>
                <div className="search-results">
                    {movies.map(movie => (
                        <Movie key={movie.imdbID} movie={movie} />
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Add
