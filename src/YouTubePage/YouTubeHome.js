import React, { useState } from 'react';
import Nav from '../Home/Nav';
import './youtube.css';
import { Button, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import ReactPlayer from 'react-player';

function YouTubeHome() {
    const opts = {
         height: '550',
        width: '60%',
         margin:'auto',
         playerVars: {
             // https://developers.google.com/youtube/player_parameters
             autoplay: 1,
         },
    };

    const [searchVDO, setSearchVDO] = useState('');
    const [playVDO, setPlayVDO] = useState('');
    
    const handleChange = (event) => {
        setSearchVDO(event.target.value)
    }

    const handleButton = (event) => {
        if (playVDO) {
            setPlayVDO('');
        } else {
            movieTrailer(searchVDO).then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setPlayVDO(urlParams.get("v"));
            }).catch((error) => console.log(error));
        }
        
    }

    return (
        <div>
            <Nav />
            <div className='search__bar'>
                <form>
                    <TextField className='textSearch' id='standard_basic' placeholder='search' onChange={handleChange}/>
                    <Button variant='contained' size='small' startIcon={<SearchIcon />} onClick={handleButton}>
                        Search
                    </Button>
                </form>
                {/*<ReactPlayer
                    url="https://www.youtube.com/watch?v=v5ZqHMBwyKU"
                /> */}
            </div>
        {playVDO && <YouTube videoId={playVDO} opts={opts} />}
        </div>
    )
}

export default YouTubeHome;

