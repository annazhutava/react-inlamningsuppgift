import React, { useState } from "react";

function Search({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState("");

  const searchWord = (event) => {
    setFilteredData(event.target.value);
  };

  const newFilter = data.filter((value) => {
    return value.title.toLowerCase().includes(filteredData.toLowerCase());
  });

  return (
    <div className="search">
      <div className="searchInput">
        <input type={"type"} placeholder={placeholder} onChange={searchWord} />
      </div>
      <div className="dataResults">
        {newFilter.map((value, key) => {
          return (
            <div className="card">
              <img src={value.img} className="card-img" alt="" />
              <div className="card-body">
                <h5 className="card-title">{value.title}</h5>
                <p className="card-text">{value.description}</p>
                <button className="btn">Click</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Search;
