import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.image} className="image-here"/>
      <div className="review-block">
        <span className="review">"{props.review}"</span>
        <p className="name">—{props.name}</p>
      </div>
    </div>
  );
}

// https://picsum.photos/id/237/300/300" alt="1.jpg" className="image-here