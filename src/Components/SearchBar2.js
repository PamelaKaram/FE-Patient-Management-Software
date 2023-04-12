import { useState } from "react";
import searchBarIcon from "../icons/orangeSearchBarIcon.svg";
import SideStyles from "../styles/SearchBar2.module.css";
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
