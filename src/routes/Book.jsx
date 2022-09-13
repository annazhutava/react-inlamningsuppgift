import React from "react";
import { Navbar } from "../components";
import BookDetails from "../components/BookDetails";
import data from "../data/Data.js";

function Book() {
  return (
    <>
      <Navbar />
      <BookDetails data={data.cardData} />
    </>
  );
}

export default Book;
