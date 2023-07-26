import React from "react";

const MovieCard = ({ singular_movie }) => {
  return (
    <div className="movie">
      <div>
        <p>{singular_movie.Year}</p>
      </div>

      <div>
        <img
          src={
            singular_movie.Poster !== "N/A"
              ? singular_movie.Poster
              : "https://via.placeholder.com/400"
          }
        />
      </div>

      <div>
        <span>{singular_movie.Type}</span>
        <h3>{singular_movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
