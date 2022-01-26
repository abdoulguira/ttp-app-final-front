import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import MovieDetailPage from './components/MovieDetailPage'
import './App.css';

function App() {
  const HomePageElm = () => (<HomePage />)
  const MovieDetailPageElm = () => (<MovieDetailPage />)
  return (
    <Router>
          <div className="App">
            <nav>sample nav</nav>
            <h1>search bar, log in, filter, goes here </h1>
            <Routes>
              <Route exact path="/" element={<HomePageElm/>}/>
              <Route exact path="/movie/:id" element={<MovieDetailPageElm/>}/>
            </Routes>

          </div>



    </Router>

  );
}

export default App;
