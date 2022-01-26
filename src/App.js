import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import MovieDetailPage from './components/MovieDetailPage'
import SearchBar from './components/SearchBar'
import NavBar from './components/navbar/NavBar';
import LogIn from './components/LogIn';
import './App.css';

function App() {
  const HomePageElm = () => (<HomePage />)
  const MovieDetailPageElm = () => (<MovieDetailPage />)
  const LogInElm = () => (<LogIn />)

  return (
    <Router>
          <div className="App">
            <nav>sample nav</nav>
            <h1>search bar, log in, filter, goes here </h1>
            <SearchBar />
            <NavBar />
            <Routes>
              <Route exact path="/" element={<HomePageElm/>}/>
              <Route exact path="/movie/:id" element={<MovieDetailPageElm/>}/>
              <Route exact path="/login" element={<LogInElm/>}/>
            </Routes>

          </div>



    </Router>

  );
}

export default App;
