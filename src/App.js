import React, { useState } from 'react';
import RandomJokes from './RandomJokes';
import CreatePlayList from './CreatePlaylist';
import PlayList from './Playlists';
import FeaturedJoke from './FeaturedJoke';
import Joke from './Joke';
import axios from 'axios';

const App = () => {
    const [lists, setLists] = useState();
    const [mounted, setMounted] = useState(false);

    const handlClick = () => {
        setMounted(mounted ? false : true);
    };

    const renderJoke = joke => {
        const handleAddToPlaylist = (choose) => {
            axios.patch(`/playlists/${choose}`, { joke: joke })
                .then(() => {
                    axios.get('/playlists')
                        .then((res) => setLists(res.data))
                        .catch(e => console.log(e));
                })
                .catch((e) => console.log(e));
        }

        return <Joke joke={joke} playlists={lists} handleAddToPlaylist={handleAddToPlaylist} />
    };

    return (
        <div className='app'>
            <h1>Joke App</h1>
            <button onClick={handlClick}>Show Featured</button>
            {mounted ? <FeaturedJoke renderJoke={renderJoke} /> : <></>}
            <RandomJokes renderJoke={renderJoke} />
            <CreatePlayList setLists={setLists} />
            <PlayList lists={lists} />
        </div>);
}

export default App;