import React, { useState } from "react";
 
const Joke = props => {
  const [choose, setChoose] = useState();

  const handleChangePlaylist = (e) => {
      setChoose(e.target.value);
  };

  const handlSubmit = (e) => {
    e.preventDefault();
    props.handleAddToPlaylist(choose);
  }

  return (
    <div className="joke">
      <div>{props.joke.setup}</div>
      <div><strong>{props.joke.punchline}</strong></div>
      <form onSubmit={handlSubmit}>
        <label>Add to list
          <select onChange={handleChangePlaylist} defaultValue='default'>
            <option disabled value='default'> -- choose a playlist --</option>
            {
              props.playlists? 
              props.playlists.map((playlist,key) => 
              <option value={playlist.name} key={key}>{playlist.name}</option>)
              :<></>
            }
          </select>
          <button>add</button>
        </label>
      </form>
    </div>
  )
};

export default Joke;