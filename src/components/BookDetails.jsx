import React from "react";
import { useParams } from "react-router-dom";
import "./BookDetails.css";

const BookDetails = ({ data }) => {
  const { title } = useParams();

  const newFilter = data.filter((value) => value.title === title);

  return (
    <div className="book-container">
      {newFilter.map((value, index) => (
        <div className="book-card" key={value.id}>
          <div className="book-img-container">
            <img src={value.img} className="book-img" alt="" />
          </div>
          <div className="book-body">
            <div className="book-text">
              <h5 className="book-title">{value.title}</h5>
              <p className="book-author">{value.author}</p>
              <p className="book-desc">{value.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookDetails;
