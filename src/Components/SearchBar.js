import { useState } from "react";
import searchBarIcon from "../icons/searchBarIcon.svg";
import SideStyles from "../styles/SearchBar.module.css";
import Image from 'next/image';

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    if (!value) {
        setResults([]);
        return;
      }
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value.toLowerCase())
          );
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
      <Image 
         src={searchBarIcon.src} 
         alt="Search"  
          width={30}
          height={30}
         className={SideStyles.myImageClass} />
      <input
        className={SideStyles.searchBarInput}
        placeholder="Type to search..."
        value={input}
        onChange={handleChange}
        /* onChange={(e) => handleChange(e.target.value)} */
      />
    </div>
  );
};

export default SearchBar;