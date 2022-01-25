import React, { useState } from 'react';
import "./../App.css"

const imageAPI = "https://image.tmdb.org/t/p/w500"


export default function MovieCard(props) {

  return (
      <div className="cardImg" style={styles.cardStyle} onClick={ () => console.log("clicked")}>
          <img src={`${imageAPI}${props.imgData["poster_path"]}`} 
            alt="movie-profile" 
            width="300px" 
            style={styles.imgStyle}
            />

          <p>{props.imgData["title"]}</p>
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
   }
}