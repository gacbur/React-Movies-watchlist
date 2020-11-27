import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { MoviesGlobalContext } from '../context/MoviesGlobalContext'

const Nav = () => {

    const { watched } = useContext(MoviesGlobalContext)

    return (
        <div className="nav">
            <div className="logo">
                <Link to="/">Watchlist</Link>
            </div>
            <ul className="nav-links-cnt">
                <li className="nav-link">
                    <Link to="/">Watchlist</Link>
                </li>
                <li className="nav-link">
                    <Link to="/Watched" >Watched
                    <div className="count-watched-icon">
                            {watched.length}
                        </div>
                    </Link>
                </li>
                <li className="add-btn">
                    <Link to="/Add" >Add</Link>
                </li>
            </ul>
        </div>
    );
}

export default Nav;