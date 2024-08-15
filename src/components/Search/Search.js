import React, { useState } from 'react';
import Image from './Search.svg';
import './Search.css';
import SearchModal from './SearchModal';

const Search = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetch_search_results = async (query) => {
    const token = localStorage.getItem('token');
    try {
      console.log('Fetching results',token)
      const res = await fetch(`/api/search_details?query=${query}`,{
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` },
    })
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      return data || [];
    } catch (err) {
      console.error('Error fetching search data:', err);
      return [];
    }
  };

  const handleSearch = () => {
    if (query.trim() === '') return;
    fetch_search_results(query).then((data) => {
      setResults(data);
      setIsModalOpen(true);
    });
  };

  return (
    <div className="input">
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
        headerJsx={results.length > 0 && (
          <h2>{results.length} Products Related to "{query}"</h2>
        )}
      />
    </div>
  );
};

export default Search;
