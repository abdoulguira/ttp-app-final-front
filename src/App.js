import React, {useEffect, useState} from 'react';
import './App.css';
import Movie from "./components/Movie"

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleOnSumbit = (e) => {
    e.preventDefault();
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="App">
      <header>
        <h1>Group 10 is working on the final App</h1>
        <form onSubmit={handleOnSumbit}>
          <input 
            className = "search" 
            type="text" 
            placeholder='Search...'
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
    </div>
  );
}

export default App;
