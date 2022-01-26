import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import MovieDetailPage from './components/MovieDetailPage'
import SearchBar from './components/SearchBar'
import NavBar from './components/navbar/NavBar';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import './App.css';

function App() {
  const HomePageElm = () => (<HomePage />)
  const MovieDetailPageElm = () => (<MovieDetailPage />)
  const LogInElm = () => (<LogIn />)
  const SignUpElm = () => (<SignUp />)

  return (
    <Router>
          <div className="App">
            {/* search bar, log in, filter, goes here */}
            <NavBar />
            <SearchBar />
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
