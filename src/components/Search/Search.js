import React from "react";
import styles from "./Search.module.scss";
// only filter by name
const Search = ({ setSearch, setPageNumber }) => {
  return (
    <form className="my-5 d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4">
      <input
        type="text"
        className={`${styles.input}`}
        placeholder="Search for Characters"
        onChange={(e) => {
          setPageNumber(1);
          setSearch(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        className={`btn btn-primary fs-5 ${styles.btn}`}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
