import React, {useEffect, useState} from 'react';

export default function SearchBar() {
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