import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MovieCard from "./MovieCard"




const imageAPI = "https://image.tmdb.org/t/p/w500"

const similarAPI = "https://api.themoviedb.org/3/movie/32329/similar?api_key=9b790665c935b1e0e1913340b809510c"


export default function MovieDetailPage(props){
    const [movieDetail, setMovieDetail] = useState({})
    const [similarMovies, setSimilarMovies] = useState([])
    const params = useParams()

    useEffect(() => {
        fetchMovieDetail(params.id)
        fetchSimilarMovies(params.id)

        document.getElementsByClassName("suggestionSection").scrollLeft = 0
        // console.log( document.getElementsByClassName("suggestionSection").scrollLeft + 1000)

    }, [params.id])

    function fetchMovieDetail(movieId){

        // can be moved to backend 
        const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=04c35731a5ee918f014970082a0088b1`
        fetch(apiUrl)
            .then(res => res.json())
            .then(res => setMovieDetail(res))
            .catch(err => console.log(err))
    }

    function fetchSimilarMovies(movieId){
      const apiUrl = "https://api.themoviedb.org/3/movie/"+movieId+"/similar?api_key=9b790665c935b1e0e1913340b809510c"

      fetch(apiUrl)
        .then(res => res.json())
        .then(res => setSimilarMovies(res["results"]))
        .catch(err => console.log(err))
    }

    return(
      <div>
        <div style={styles.detailSection}>
            <div style={styles.imageSection}>
                {movieDetail["poster_path"] && <img src={`${imageAPI}${movieDetail["poster_path"]}`} 
                                                      width="400px"
                                                      style={{marginBottom: "10px"}}/>}
                                                      
                {/* {movieDetail["backdrop_path"] && <img src={`${imageAPI}${movieDetail["backdrop_path"]}`} 
                                                      width="400px"/>} */}

            </div>
            <div style={styles.infoSection}>
            <div style={styles.titleRow}>
              {movieDetail["title"] && <p style={styles.titleStyle}>{movieDetail["title"]}</p>}
              {movieDetail["vote_average"] && <p style={styles.rateStyle}><strong style={{color: "gold"}}>{movieDetail["vote_average"]}</strong> / 10 </p>}
              {movieDetail["vote_count"] && <p style={styles.voteCountStyle}> ({Math.floor(Number(movieDetail["vote_count"])/ 1000)} k)</p>}
            </div>
            <div style={styles.subInfoStyle}>
              {movieDetail["release_date"] && <p style={styles.yearStyle}>{movieDetail["release_date"].substring(0,4)}</p>}
              <p>·</p>
              {movieDetail["runtime"] && <p style={styles.runtimeStyle}> {movieDetail["runtime"]} min</p>}
              {movieDetail["genres"] && movieDetail["genres"].map((genra) => <p style={styles.genreStyle}>{genra['name']}</p>)}

            </div>
              <div style={styles.mainInfoStyle}>
                {movieDetail["tagline"] && <p style={styles.taglineStyle}>{movieDetail["tagline"]}</p>}
                <br></br>
                {movieDetail["budget"] == 0 ? <></> : <p>Budget: ${movieDetail["budget"]}</p>}
                {movieDetail["revenue"] == 0 ? <></> : <p>Revenue: ${movieDetail["revenue"]}</p>}
                {movieDetail["original_language"] && <p>Language: {movieDetail["original_language"].toUpperCase()}</p>}
                {movieDetail["production_companies"] && <p>Production Companies: </p>}
                <ul>
                {movieDetail["production_companies"] && movieDetail["production_companies"].map((c) => <p>{c['name']}</p>)}
                </ul>
                {movieDetail["production_countries"] && <p>Production Countries: </p>}
                <ul>
                {movieDetail["production_countries"] && movieDetail["production_countries"].map((c) => <p>{c['name']}</p>)}

                </ul>
              </div>
            </div>
        </div>
        <div>
          <p style={styles.suggestText}>Movies You May Also Like</p>
        </div>
            <div className="suggestionSection" style={styles.suggestionMovies}>
              {similarMovies.map(m => <MovieCard style={{width: "100%"}}movieData={m}/>)}
            </div>
        </div>
    )

}

const styles = {
    detailSection:{
      height: "650px",
      display: "flex",
      marginLeft: "15%",
      marginRight: "15%",
      marginTop: "100px",
      justifyContent: "space-between",
    },
    imageSection: {
      display: "block",
      marginRight: "50px"
    },
    infoSection:{
      width: "40%",
      marginRight: "100px"
    },
    titleRow:{
      display: "flex",
      marginTop: '-60px',
      marginRight: 'auto',
      justifyContent: "space-between",

    },
    titleStyle:{
      width: '1000px',
      fontSize: "40px",
      letterSpacing: "0.04em",
      fontWeight: "500",
      marginRight: "40px",
      textAlign:"Left"
      // whiteSpace: 'nowrap'


    },
    rateStyle: {
      fontSize: "40px",
      letterSpacing: "0.02em",
      whiteSpace: 'nowrap'
    },
    voteCountStyle:{
      whiteSpace: 'nowrap',
      marginBottom: 'auto',
      marginTop: '68px',
      marginLeft: '10px',
      marginRight: 'auto'
    },
    subInfoStyle:{
      display: "flex",
      marginTop: "-50px",
      color: "#90959c",
      fontSize: "20px"
    },
    yearStyle:{
      paddingRight: "10px"

    },
    runtimeStyle:{
      paddingLeft: "10px",
      paddingRight: "50px"

    },

    genreStyle:{
      textAlign: 'center',
      paddingLeft: "10px",
      paddingRight: "10px",
      textAlign: 'center',
      border: "1px solid grey",
      borderRadius: "20px",
      marginRight: "2px",
      textAlign: "center",
      verticalAlign: "middle"
    },
    mainInfoStyle: {
      display: "block",
      textAlign: "left",
      fontSize: "18px"
    },
    taglineStyle: {
      fontSize: '20px',
      letterSpacing: "1.2px"
    },
    suggestText:{
      fontSize: "28px",
      textAlign: "left",
      marginLeft: "15%",
      marginRight: "15%"

    },

    suggestionMovies:{
      display: "flex",
      height: '550px',
      marginLeft: '15%',
      marginRight: '18%',
      // overflowX: 'hidden',
      overflowY: 'scroll',
      whiteSpace: 'nowrap'
    }
    
  
}