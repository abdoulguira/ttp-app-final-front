import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"




const imageAPI = "https://image.tmdb.org/t/p/w500"


export default function MovieDetailPage(props){
    const [movieDetail, setMovieDetail] = useState({})
    const params = useParams()

    useEffect(() => {
        fetchMovieDetail(params.id)
    }, [params.id])

    function fetchMovieDetail(movieId){
        // can be moved to backend 
        const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=04c35731a5ee918f014970082a0088b1`
        fetch(apiUrl)
            .then(res => res.json())
            .then(res => setMovieDetail(res))
            .catch(err => console.log(err))
    }

    return(
        <div style={styles.detailSection}>
            <div style={styles.imageSection}>
                {movieDetail["poster_path"] && <img src={`${imageAPI}${movieDetail["poster_path"]}`} 
                                                      width="400px"
                                                      style={{marginBottom: "10px"}}/>}
                                                      
                {movieDetail["backdrop_path"] && <img src={`${imageAPI}${movieDetail["backdrop_path"]}`} 
                                                      width="400px"/>}

            </div>
            <div style={styles.infoSection}>
              {movieDetail["title"] && <p>Title: {movieDetail["title"]}</p>}
              {movieDetail["genres"] && <p>Genres: </p>}
              {movieDetail["genres"] && movieDetail["genres"].map((genra) => <p>{genra['name']}</p>)}
              {movieDetail["release_date"] && <p>Release Date: {movieDetail["release_date"]}</p>}
              {movieDetail["runtime"] && <p>Running Time: {movieDetail["runtime"]} min</p>}
              {movieDetail["tagline"] && <p>{movieDetail["tagline"]}</p>}
              {movieDetail["vote_average"] && <p>Vote Average: {movieDetail["vote_average"]}</p>}
              {movieDetail["vote_count"] && <p>Vote Count: {movieDetail["vote_count"]}</p>}


              {movieDetail["budget"] && <p>Budget: {movieDetail["budget"]}</p>}
              {movieDetail["revenue"] && <p>Revenue: {movieDetail["revenue"]}</p>}
              {movieDetail["original_language"] && <p>Language: {movieDetail["original_language"]}</p>}
              {movieDetail["production_companies"] && <p>Production Companies: </p>}
              {movieDetail["production_companies"] && movieDetail["production_companies"].map((c) => <p>{c['name']}</p>)}
              {movieDetail["production_countries"] && <p>Production Countries: </p>}
              {movieDetail["production_countries"] && movieDetail["production_countries"].map((c) => <p>{c['name']}</p>)}




            </div>
        </div>
    )

}

const styles = {
    detailSection:{
        height: "1000px",
        display: "flex",
        marginLeft: "8%",
        marginRight: "8%",
        marginTop: "100px"

    },
    imageSection: {
        display: "block",
        marginRight: "50px"
        
    },
    infoSection:{
        width: "40%",
        marginLeft: "50px",
        marginRight: "50px"
    }
}