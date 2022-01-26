import React, { useState } from 'react';
import MovieCard from './MovieCard';


const sampleData = [{
    "adult": false,
    "backdrop_path": "/8xt8AMb1OKC63AdhNSaYBWxB4Iq.jpg",
    "genre_ids": [
                18,
                53,
                9648
    ],
    "id": 11324,
    "original_language": "en",
    "original_title": "Shutter Island",
    "overview": "World War II soldier-turned-U.S. Marshal Teddy Daniels investigates the disappearance of a patient from a hospital for the criminally insane, but his efforts are compromised by his troubling visions and also by a mysterious doctor.",
    "popularity": 53.829,
    "poster_path": "/52d7CAjnwh1cZXd2lhKaHVFMu0Q.jpg",
    "release_date": "2010-02-14",
    "title": "Shutter Island",
    "video": false,
    "vote_average": 8.2,
    "vote_count": 19257
    },
    {
        "adult": false,
        "backdrop_path": "/8xt8AMb1OKC63AdhNSaYBWxB4Iq.jpg",
        "genre_ids": [
                    18,
                    53,
                    9648
        ],
        "id": 11325,
        "original_language": "en",
        "original_title": "Shutter Island",
        "overview": "World War II soldier-turned-U.S. Marshal Teddy Daniels investigates the disappearance of a patient from a hospital for the criminally insane, but his efforts are compromised by his troubling visions and also by a mysterious doctor.",
        "popularity": 53.829,
        "poster_path": "/52d7CAjnwh1cZXd2lhKaHVFMu0Q.jpg",
        "release_date": "2010-02-14",
        "title": "Shutter Island",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 19257
        },
        {
            "adult": false,
            "backdrop_path": "/8xt8AMb1OKC63AdhNSaYBWxB4Iq.jpg",
            "genre_ids": [
                        18,
                        53,
                        9648
            ],
            "id": 11326,
            "original_language": "en",
            "original_title": "Shutter Island",
            "overview": "World War II soldier-turned-U.S. Marshal Teddy Daniels investigates the disappearance of a patient from a hospital for the criminally insane, but his efforts are compromised by his troubling visions and also by a mysterious doctor.",
            "popularity": 53.829,
            "poster_path": "/52d7CAjnwh1cZXd2lhKaHVFMu0Q.jpg",
            "release_date": "2010-02-14",
            "title": "Shutter Island",
            "video": false,
            "vote_average": 8.2,
            "vote_count": 19257
            },
            {
                "adult": false,
                "backdrop_path": "/8xt8AMb1OKC63AdhNSaYBWxB4Iq.jpg",
                "genre_ids": [
                            18,
                            53,
                            9648
                ],
                "id": 11327,
                "original_language": "en",
                "original_title": "Shutter Island",
                "overview": "World War II soldier-turned-U.S. Marshal Teddy Daniels investigates the disappearance of a patient from a hospital for the criminally insane, but his efforts are compromised by his troubling visions and also by a mysterious doctor.",
                "popularity": 53.829,
                "poster_path": "/52d7CAjnwh1cZXd2lhKaHVFMu0Q.jpg",
                "release_date": "2010-02-14",
                "title": "Shutter Island",
                "video": false,
                "vote_average": 8.2,
                "vote_count": 19257
                },
                {
                    "adult": false,
                    "backdrop_path": "/8xt8AMb1OKC63AdhNSaYBWxB4Iq.jpg",
                    "genre_ids": [
                                18,
                                53,
                                9648
                    ],
                    "id": 11328,
                    "original_language": "en",
                    "original_title": "Shutter Island",
                    "overview": "World War II soldier-turned-U.S. Marshal Teddy Daniels investigates the disappearance of a patient from a hospital for the criminally insane, but his efforts are compromised by his troubling visions and also by a mysterious doctor.",
                    "popularity": 53.829,
                    "poster_path": "/52d7CAjnwh1cZXd2lhKaHVFMu0Q.jpg",
                    "release_date": "2010-02-14",
                    "title": "Shutter Island",
                    "video": false,
                    "vote_average": 8.2,
                    "vote_count": 19257
                    },
                    {
                        "adult": false,
                        "backdrop_path": "/8xt8AMb1OKC63AdhNSaYBWxB4Iq.jpg",
                        "genre_ids": [
                                    18,
                                    53,
                                    9648
                        ],
                        "id": 11329,
                        "original_language": "en",
                        "original_title": "Shutter Island",
                        "overview": "World War II soldier-turned-U.S. Marshal Teddy Daniels investigates the disappearance of a patient from a hospital for the criminally insane, but his efforts are compromised by his troubling visions and also by a mysterious doctor.",
                        "popularity": 53.829,
                        "poster_path": "/52d7CAjnwh1cZXd2lhKaHVFMu0Q.jpg",
                        "release_date": "2010-02-14",
                        "title": "Shutter Island",
                        "video": false,
                        "vote_average": 8.2,
                        "vote_count": 19257
                        },
]



export default function MovieContainer(props) {

  return (
      <div style={styles.movieContainerStyle}>
          {sampleData.map((data) => <MovieCard key={data.id} movieData={data}/> )} 
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