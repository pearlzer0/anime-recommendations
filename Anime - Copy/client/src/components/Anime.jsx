import React, { useState } from "react";

function Anime(props) {
  return (
    <div className="cardSize">
      <hr />
      <h3>
        {props.title.length < 30
          ? props.title
          : props.title.substring(0, 30) + "..."}
      </h3>
      <img className="animeImage" src={props.image} alt="wrong url cuh" />
      <p>
        {props.opinion.length < 50
          ? props.opinion
          : props.opinion.substring(0, 50) + "..."}
      </p>
    </div>
  );
}

export default Anime;
