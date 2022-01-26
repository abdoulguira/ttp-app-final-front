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
                {movieDetail["budget"] && <p>Budget: {movieDetail["budget"]}</p>}
                {movieDetail["revenue"] && <p>Revenue: {movieDetail["revenue"]}</p>}
                {movieDetail["original_language"] && <p>Language: {movieDetail["original_language"]}</p>}
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
    )

}

const styles = {
    detailSection:{
      height: "1000px",
      display: "flex",
      marginLeft: "8%",
      marginRight: "8%",
      marginTop: "100px",
      justifyContent: "space-between",
    },
    imageSection: {
      display: "block",
      marginRight: "520x"
    },
    infoSection:{
      width: "40%",
      marginRight: "100px"
    },
    titleRow:{
      display: "flex",
      marginTop: '-80px',
      marginRight: 'auto',
      justifyContent: "space-between",

    },
    titleStyle:{
      width: '1000px',
      fontSize: "40px",
      letterSpacing: "0.1em",
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
      paddingTop: '0.5px',
      paddingBottom: '0.5px',
      border: "1px solid grey",
      borderRadius: "20px",
      marginRight: "10px"
    },
    mainInfoStyle: {
      display: "block",
      textAlign: "left",
      fontSize: "18px"
    },
    taglineStyle: {
      fontSize: '20px',
      letterSpacing: "1.2px"
    }

  
}