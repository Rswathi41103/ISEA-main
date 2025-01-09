import React, { useState } from "react";
import "./Card.css";

const Card = ({ speaker }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="card">
      {/* Header Section */}
      <h1 className="card_h1">{speaker.date}</h1>

      {/* Image Section */}
      <div className="image_card">
        <div className="image-container">
          <img src={speaker.image} alt={speaker.name} />
        </div>
        {/* Speaker Details */}
        <div className="details">
          <p className="fade-in">
            Speaker: <strong>{speaker.name}</strong>
          </p>
          <p className="fade-in">{speaker.university}</p>
          <p className="title">Title: {speaker.title}</p>
        </div>
      </div>

      {/* Abstract and Bio Section */}
      {showMore ? (
        <>
          <p className="short-text">
            <strong style={{ backgroundColor: "#F8F8F8" }}>Abstract : </strong>{" "}
            {speaker.abstract}
          </p>

          <p className="bio"> <strong style={{ backgroundColor: "#e9f5ff" }}>Speaker Bio : </strong>{" "} {speaker.bio}</p>
        </>
      ) : (
        <p className="short-text">
          <strong>Abstract :</strong> {speaker.abstract.slice(0, 100)}...
        </p>
      )}

      {/* Toggle Button */}
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Read Less" : "Read More"}
      </button>

      {/* Personal Website */}
      <p className="website">
        Personal Website:{" "}
        <a href={speaker.website} target="_blank" rel="noopener noreferrer">
          Visit Here
        </a>
      </p>
    </div>
  );
};

export default Card;
