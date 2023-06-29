import React, { useState, useEffect } from "react";
import Axios from "axios";
import Submission from "./Submission";
import Header from "./Header";
import Anime from "./Anime";

function App() {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((response) => {
      setAnimeList(response.data);
    });
  }, []);

  const addAnime = (anime) => {
    Axios.post("http://localhost:3001/insert", anime);
    console.log(anime);
  };

  return (
    <div className="bgImage">
      <Header />
      <div>
        <Submission onClicked={addAnime} />
        <div>
          {animeList
            .slice(0)
            .reverse()
            .map((val, index) => {
              return (
                <div key={index}>
                  <Anime
                    title={val.title}
                    image={val.image}
                    opinion={val.opinion}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
