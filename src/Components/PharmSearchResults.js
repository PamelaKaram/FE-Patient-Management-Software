import SideStyles from "../styles/SearchResult.module.css";
import { useState } from "react";

const SearchResult = ({ result, setResults, results }) => {
  const { name, hasAccess } = result;

  const handleAccessClick = () => {
    const updatedResults = results.map((res) => {
      if (res.name === name) {
        return { ...res, hasAccess: !res.hasAccess };
      }
      return res;
    });
    setResults(updatedResults);
  };

  return (
    <div className={SideStyles.searchResult}>
      <div onClick={(e) => alert(`You selected ${name}!`)}>{name}</div>
      <button className={SideStyles.accessButton} onClick={handleAccessClick}>
        {hasAccess ? "Remove Access" : "Give Access"}
      </button>
    </div>
  );
};

export default SearchResult;