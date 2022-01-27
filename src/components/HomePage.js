import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import MovieContainer from "./MovieContainer"
import NavBarAfter from './navbar/NavBarAfter';
import NavBarBefore from './navbar/NavBarBefore';
import SearchBar from './SearchBar'

const trendingApi = "http://localhost:8001/movie/popular"
const getMovieApi = "http://localhost:8001/getMovies/"

export default function HomePage(props){
    const [movieData, setMovieData] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [loggedIn, setLoggedIn] = useState(false)
    const param = useParams()

    useEffect(() => {
        fetch(searchTerm == "" ? trendingApi : getMovieApi + searchTerm)
        .then(response => response.json())
        .then(data => setMovieData(data['results']));
    }, [searchTerm])

    useEffect(() =>{
        if(param.auth == "true"){
            setLoggedIn(true)
        }
    }, [param.username])

    return (
        <div>
        {loggedIn ? <NavBarAfter setLoggedIn={setLoggedIn} username={param.username}/> : <NavBarBefore/>}
        <div>
            <SearchBar setSearchTerm={setSearchTerm}/>
            <MovieContainer movieData={movieData}/>
        </div>
        </div>

    )
}