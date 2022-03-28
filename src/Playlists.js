import React from "react";

const PlayList = props => {
  return (
    <>
      <h2>Playlists</h2>
      {props.lists ? <ul>
        {
          props.lists.map((list, key) => {
            return (
              <li key={key}><strong>{list.name}</strong>
                {list.lists ? <ul>{
                  list.lists.map((joke, key) => <li key={key}>{joke.setup}<br />
                    <strong>{joke.punchline}</strong>
                  </li>)
                }</ul> :
                  <></>
                }
              </li>
            )
          })
        }
      </ul> :
        <></>
      }
    </>
  )
}

export default PlayList