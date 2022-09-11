import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Books from "../Data";

function Second() {
  return (
    <>
      <Navbar />
      <Search placeholder={"Search for a book"} data={Books.cardData} />
    </>
  );
}

export default Second;
