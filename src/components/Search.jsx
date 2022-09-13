import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/Search.css";

function Search({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState("");

  const searchWord = (event) => {
    setFilteredData(event.target.value);
  };

  const newFilter = data.filter((value) => {
    return value.title.toLowerCase().includes(filteredData.toLowerCase());
  });

  return (
    <div className="container">
      <div className="search">
        <input
          type={"type"}
          placeholder={placeholder}
          onChange={searchWord}
          className="search-input"
        />
      </div>
      <div className="data-results">
        {newFilter.map((value, key) => {
          return (
            <div className="card" key={value.id}>
              <div className="img-container">
                <img src={value.img} className="card-img" alt="" />
              </div>
              <div className="card-body">
                <div className="card-text">
                  <h5 className="card-title">{value.title}</h5>
                  <p className="card-author">{value.author}</p>
                  <Link to={`/books/${value.title}`}>
                    <button className="btn">Read more</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Search;
