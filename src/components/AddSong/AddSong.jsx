import React, { useState } from 'react';
import "./AddSong.css"
import axios from 'axios';

function CreateSong(props){

  const [title,setTitle] = useState('');
  const [album, setAlbum]= useState('');
  const [genre, setGenre]= useState('');
  const [releaseDate,setReleaseDate]= useState('');
  const [artist, setArtist]=useState('');


  async function handleSubmit(e){
    // e.preventDefault();
    const postSong={
            title: title,
            album: album,
            artist: artist,
            genre: genre,
            releaseDate: releaseDate,
    };
    let response = await axios.post(`http://localhost:5000/api/songs`, postSong);
    if(response.status == 200){
console.log("Song added.")
    }
  }


    return(
      <div >
      <div >
        <div >
          <form className="AddSong" onSubmit={handleSubmit}>
            <input placeholder="Song Title " value={title} onChange={(event) => setTitle(event.target.value)} type='text'/>
            <input placeholder="Album" value={album} onChange={(event) => setAlbum(event.target.value)} type='text' />
            <input placeholder="Artist" value={artist} onChange={(event) => setArtist(event.target.value)} type='text' />
            <input placeholder="genre" value={genre} onChange={(event) => setGenre(event.target.value)} type='text' />
            <input placeholder="releaseDate" value={releaseDate} onChange={(event) => setReleaseDate(event.target.value)} type='text' />
            <button className="AddSong" type="submit">
             Add Song
            </button>
          </form>
        </div>
      </div>
    </div>
    )
}

export default CreateSong;