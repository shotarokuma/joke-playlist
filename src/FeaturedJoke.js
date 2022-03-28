import React, { useState, useEffect } from "react";
import axios from "axios";

const FeaturedJoke = props => {
  const [featured, setFeatured] = useState();
  useEffect(() => {
    const reload = () => {
      axios.get("/api/v1/joke")
        .then((res) => {
          setFeatured(res.data);
        })
        .catch(e => console.log(e));
    };
    let reloader = setInterval(reload, 8000);
    reload();
    return () => {
      clearInterval(reloader);
    }
  }, []);

  return (
    <>
      <div className="featured-joke">
        <h2>Featured Joke</h2>
        {featured ?
          props.renderJoke(featured) : <div>loading...</div>
        }

      </div> : <></>
    </>
  )
}

export default FeaturedJoke;