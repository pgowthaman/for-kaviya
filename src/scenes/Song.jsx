import { useState } from "react";
import Scene from "../components/Scene.jsx";
import { SONG_NAME, SONG_URL, PLAYLIST_LINK } from "../data.js";

export default function Song({ active, goTo, index }) {
  const [playing, setPlaying] = useState(false);

  return (
    <Scene active={active}>
      <p className="body-text">One last thing...</p>
      <p className="body-text">This song is for you.</p>
      <div className="song-card">
        <p className="song-name">{SONG_NAME}</p>
        {!playing && (
          <button className="btn btn-primary" onClick={() => setPlaying(true)}>
            ▶ PLAY
          </button>
        )}
        {playing && (
          <div className="song-player show">
            <iframe
              src={SONG_URL}
              title={SONG_NAME}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        )}
      </div>

      <p className="body-text small">And if one song isn't enough...</p>
      <div className="song-card">
        <p className="song-name">A playlist, just for you 🎵</p>
        <a className="btn btn-primary" href={PLAYLIST_LINK} target="_blank" rel="noopener noreferrer">
          ▶ Open Playlist on YouTube
        </a>
      </div>

      <button className="btn btn-primary btn-continue" onClick={() => goTo(index + 1)}>
        Continue →
      </button>
    </Scene>
  );
}
