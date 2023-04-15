import { useState } from "react";
import SideStyles from "../styles/SearchBar.module.css";
import Image from 'next/image';

const SearchBar = ({ setResults, iconUrl }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    if (!value) {
      setResults([]);
      return;
    }
    fetch(`https://api.example.com/pharmacies?q=${value}`)
      .then((response) => response.json())
      .then((json) => {
        const results = json.map((pharmacy) => {
          return { name: pharmacy.name, hasAccess: false };
        });
          
        setResults(results);
      })
      .catch((error) => {
        console.error(error);
        setResults([]);
      });
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setInput(value);
    fetchData(value);
  };

  return (
    <div className={SideStyles.inputWrapper}>
      <input
        className={SideStyles.searchBarInput}
        placeholder="Search for pharmacy/hospital..."
        value={input}
        onChange={handleChange}
      />
      <Image 
         src={iconUrl} 
         alt="Search"  
          width={33}
          height={33}
         className={SideStyles.myImageClass} />
    </div>
  );
};

export default SearchBar;