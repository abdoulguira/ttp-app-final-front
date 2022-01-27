import React, {useEffect, useState} from 'react';

export default function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() =>{
    props.setSearchTerm(searchTerm)
  }, [searchTerm])

  const SEARCH_API = "https://ttp-app-final-back.herokuapp.com/getMovies/"

  const handleOnSumbit = (e) => {
    e.preventDefault();
    fetch(SEARCH_API + searchTerm)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results) //results need to be displayed
      });
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="search-bar">
      <header>
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