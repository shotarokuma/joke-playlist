import React, { useState } from "react";
import axios from "axios";

const CreatePlayList = props => {
  const [playlist, setPlayList] = useState("");

  const handlChange = (e) => {
    setPlayList(e.target.value)
  }

  const handlSubmit = (e) => {
    e.preventDefault();
    axios.post('/playlists', {
      name: playlist
    })
      .then(() => {
        axios.get('/playlists')
          .then(res => props.setLists(res.data))
      })
      .catch(e => console.log(e));
  }

  return (
    <>
      <form onSubmit={handlSubmit}>
        <h2>Create PlayList</h2>
        <label>
          Name of list
          <input type="text" name="playlist" onChange={handlChange} value={playlist} />
          <button>create playlist</button>
        </label>
      </form>
    </>
  );
}

export default CreatePlayList