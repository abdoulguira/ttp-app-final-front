import React, {useEffect, useState} from 'react';

export default function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() =>{
    props.setSearchTerm(searchTerm)
  }, [searchTerm])

  const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="

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