import React, { useEffect, useState } from 'react';
import MovieContainer from "./MovieContainer"
import SearchBar from './SearchBar'

const trendingApi = "http://localhost:8001/movie/popular"
const getMovieApi = "http://localhost:8001/getMovies/"

export default function HomePage(){
    const [movieData, setMovieData] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        fetch(searchTerm == "" ? trendingApi : getMovieApi + searchTerm)
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