import React, { useState, useEffect } from "react";

function Submission(props) {
  const [anime, setAnime] = useState({
    title: "",
    opinion: "",
    image: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setAnime((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    props.onClicked(anime);
    setAnime({
      title: "",
      opinion: "",
      image: "",
    });
    event.preventdefault();
  }

  return (
    <div>
      <form>
        <div className="form-group">
          <input
            autoComplete="off"
            onChange={handleChange}
            value={anime.title}
            name="title"
            type="text"
            className="form-control"
            placeholder="Title"
          />
        </div>
        <div className="form-group">
          <input
            autoComplete="off"
            onChange={handleChange}
            value={anime.image}
            name="image"
            placeholder="Image URL"
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            autoComplete="off"
            onChange={handleChange}
            value={anime.opinion}
            name="opinion"
            placeholder="Opinion"
            type="text"
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-dark" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Submission;
