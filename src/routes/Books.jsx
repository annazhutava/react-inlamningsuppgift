import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import data from "../data/Data.js";

function Books() {
  return (
    <>
      <Navbar />
      <Search placeholder={"Search for a book ..."} data={data.cardData} />
    </>
  );
}

export default Books;
