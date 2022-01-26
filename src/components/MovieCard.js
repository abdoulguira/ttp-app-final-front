import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./../App.css"

const imageAPI = "https://image.tmdb.org/t/p/w500"


export default function MovieCard(props) {
  // const [curMovie, setCurMovie] = useState("")
  // const [selectedMovie, setSelectedMovie] = useState(false)

  // useEffect(()=>{
  //   setCurMovie(props.)

  // }, [])


  // if(selectedMovie){
  //   return (<Navigate replace to={`../movie/${curId}`}/>)
  // }

  return (
      <div className="cardImg" style={styles.cardStyle} onClick={ () => window.scrollTo(0, 0)}>
        <Link to={{
                  pathname: `/movie/${props.movieData['id']}`,
                  // state: [{movieId: props.movieData == undefined ? {} : props.movieData["id"]}]
        }} style={{textDecoration: 'none'}}>
          <img src={`${imageAPI}${props.movieData["poster_path"]}`} 
            alt="movie-profile" 
            width="300px" 
            style={styles.imgStyle}
            />

          <p style={styles.titleStyle}>{props.movieData["title"]}</p>
          </Link>
      </div>
  );
}


const styles = {
   cardStyle:{
       marginLeft: "10px",
       marginTop: "50px",
       marginRight: 'auto',
       cursor: "pointer"
   },
   imgStyle:{
        cursor: 'pointer'
   },
   titleStyle: {
     color: "white",
     fontSize: "18px",
   }
}