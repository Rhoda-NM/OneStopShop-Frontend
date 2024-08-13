import React, { useState, useEffect } from 'react';
import Image from './Search.svg';
import './Search.css';
import SearchModal from './SearchModal';

const Search = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetch_search_results = async (query) => {
    try {
      const res = await fetch(`/api/search_details?query=${query}`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      return data || []; // Return empty array if data is undefined or null
    } catch (err) {
      console.error('Error fetching search data:', err);
      return [];
    }
  };

  const handleSearch = () => {
    if (query.trim() === '') return; // Don't search if the query is empty
    fetch_search_results(query).then((data) => {
      setResults(data);
      setIsModalOpen(true);
    });
  };

  const headerJsx = results.length > 0 ? (
    <h2>{results.length} Products Related to "{query}"</h2>
  ) : null;

  return (
    <div>
      <input
        type="text"
        className="search-bar"
        placeholder="Find your Onestop product!"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search_button" onClick={handleSearch}>
        <img src={Image} alt="Search" />
      </button>
      <SearchModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        products={results}
        headerJsx={headerJsx}
      />
    </div>
  );
};

export default Search;
