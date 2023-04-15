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
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          const searchTerms = value.toLowerCase().split(" ");
          const firstName = user.f_name.toLowerCase();
          const lastName = user.l_name.toLowerCase();
          return (
            searchTerms.every((term) => firstName.includes(term) || lastName.includes(term))
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
      <input
        className={SideStyles.searchBarInput}
        placeholder="Search for pharmacy/hospital..."
        value={input}
        onChange={handleChange}
        /* onChange={(e) => handleChange(e.target.value)} */
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