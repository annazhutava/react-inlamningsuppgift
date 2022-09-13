import React from "react";
import { useParams } from "react-router-dom";

const BookDetails = ({ data }) => {
  const { title } = useParams();

  console.log(data);
  console.log(title);

  const newFilter = data.filter((value) => value.title === title);

  console.log(newFilter);

  return (
    <div>
      {newFilter.map((value, index) => (
        <div key={index}>
          <h1>{value.title}</h1>
          <p>{value.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BookDetails;
