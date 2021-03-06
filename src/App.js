import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import MovieDetailPage from './components/MovieDetailPage'
import NavBarBefore from './components/navbar/NavBarBefore';
import NavBarAfter from './components/navbar/NavBarAfter';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Footer from "./components/Footer"
import './App.css';


const api = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="

function App(props) {

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
          <div className="App" >
            {/* search bar, log in, filter, goes here */}
            {/* <div id="dy-nav">
              {loggedIn ? <NavBarAfter setLoggedIn={setLoggedIn} /> :<NavBarBefore />}
            </div> */}
            {/* <NavBarAfter /> will be used when the user enters login*/}
            <Routes>
              <Route exact path="/" element={<HomePageElm/>}/>
              <Route exact path="/usr/:username/:auth" element={<HomePageElm/>}/>
              <Route exact path="/movie/:id" element={<MovieDetailPageElm/>}/>
              <Route exact path="/login" element={<LogInElm/>}/>
              <Route exact path="/signup" element={<SignUpElm/>}/>
            </Routes>
            <Footer />
          </div>
    </Router>
  );
}

export default App;
