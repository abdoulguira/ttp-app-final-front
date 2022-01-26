import React, { useEffect, useState } from 'react';
import MovieContainer from "./MovieContainer"
import SearchBar from './SearchBar'

const api = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=`
// need to link to backend with cors

export default function HomePage(){
    const [movieData, setMovieData] = useState([])
    const [searchTerm, setSearchTerm] = useState("smart")

    useEffect(() => {
        fetch(api + searchTerm)
        .then(response => response.json())
        .then(data => setMovieData(data['results']));
    }, [searchTerm])

    return (
        <div>
            <SearchBar setSearchTerm={setSearchTerm}/>
            <MovieContainer movieData={movieData}/>
        </div>

    )
}