import React, { useState } from 'react';
import MovieCard from './MovieCard';





export default function MovieContainer(props) {

  return (
      <div style={styles.movieContainerStyle}>
        {props.movieData.map((data) => data.poster_path && <MovieCard key={data.id} movieData={data}/> )} 
      </div>
  );
}


const styles = {
    movieContainerStyle: {
        display: "flex",
        flexWrap: "wrap",
        paddingLeft: 0,
        marginTop: "200px",
        marginLeft: '20%',
        marginRight: '20%',
    }
}