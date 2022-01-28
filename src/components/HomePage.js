import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import MovieContainer from "./MovieContainer"
import NavBarAfter from './navbar/NavBarAfter';
import NavBarBefore from './navbar/NavBarBefore';
import SearchBar from './SearchBar'

const trendingApi = "https://ttp-app-final-back.herokuapp.com/movie/popular"
const getMovieApi = "https://ttp-app-final-back.herokuapp.com/getMovies/"

export default function HomePage(props){
    const [movieData, setMovieData] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [username, setUsername] = useState(null)
    // const [loggedIn, setLoggedIn] = useState(false)
    const param = useParams()

    useEffect(()=>{
        setUsername(localStorage.getItem("username") == null ? "" :localStorage.getItem("username"))
    }, [username])

    useEffect(() => {
        fetch(searchTerm == "" ? trendingApi : getMovieApi + searchTerm)
        .then(response => response.json())
        .then(data => setMovieData(data['results']));
    }, [searchTerm])

    useEffect(() =>{
        if(param.auth == "true"){
            setLoggedIn()
        }
    }, [param.username])

    function setLoggedIn(){
        localStorage.setItem('loggedIn', true);
        localStorage.setItem('username', param.username);
    }

    function clearLoggedIn(){
        localStorage.clear()
    }

    return (
        <div>
        {username ? <NavBarAfter setLoggedIn={clearLoggedIn} username={param.username}/> : <NavBarBefore/>}
        <div>
            <SearchBar setSearchTerm={setSearchTerm}/>
            <MovieContainer movieData={movieData}/>
        </div>
        </div>

    )
}