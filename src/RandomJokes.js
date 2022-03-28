import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";


const RandomJokes = props => {
  const [jokes, setJokes] = useState();
  useEffect(() => {
    axios.get("/api/v1/jokes")
      .then(res => {
        setJokes(res.data);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <div className="random-jokes">
      {jokes?
        <ul>
          {
            jokes.map(joke =>
             <li key = {joke.id}>
              {props.renderJoke(joke)}
            </li>
            )
          }
        </ul>
        :<div>loading...</div>
      }
    </div>
  )
}

export default RandomJokes;