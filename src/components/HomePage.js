import React from "react"
import MovieContainer from "./MovieContainer"

export default function HomePage(props){
    return (
        <div>
            <MovieContainer movieData={props.movieData}/>
        </div>

    )
}