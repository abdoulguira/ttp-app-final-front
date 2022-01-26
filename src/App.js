import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import MovieDetailPage from './components/MovieDetailPage'
import SearchBar from './components/SearchBar'
import NavBarBefore from './components/navbar/NavBarBefore';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import './App.css';

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

const api = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=`
// need to link to backend with cors

function App() {
  const [movieData, setMovieData] = useState([])
  const [searchTerm, setSearchTerm] = useState("smart")

  useEffect(() => {
    fetch(api + searchTerm)
    .then(response => response.json())
    .then(data => setMovieData(data['results']));
  }, [searchTerm])

  const HomePageElm = () => (<HomePage movieData={movieData}/>)
  const MovieDetailPageElm = () => (<MovieDetailPage />)
  const LogInElm = () => (<LogIn />)
  const SignUpElm = () => (<SignUp />)

  return (
    <Router>
          <div className="App">
            {/* search bar, log in, filter, goes here */}
            <NavBarBefore />
            <SearchBar setSearchTerm={setSearchTerm}/>
            <Routes>
              <Route exact path="/" element={<HomePageElm/>}/>
              <Route exact path="/movie/:id" element={<MovieDetailPageElm/>}/>
              <Route exact path="/login" element={<LogInElm/>}/>
              <Route exact path="/signup" element={<SignUpElm/>}/>
            </Routes>
          </div>
    </Router>
  );
}

export default App;
