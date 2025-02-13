import React from "react";
import { TbHeart, TbCirclePlus } from "react-icons/tb";

const SongItem = ({ song, onclick, goToMusicPage }) => {
  // obj destructing
  let name = song.track.name;
  let duration_ms = song.track.duration_ms; // duration is come as millisecond
  let artist = song.track.artists[0].name;
  let image = song.track.album.images[0].url;

  // formating duration
  function formatMsToMinutes(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds.padStart(2, "0")}`;
  }
  let duration = formatMsToMinutes(duration_ms);

  return (
    <>
      <div className="flex w-full justify-between">
        <div className="flex items-start">
          <img src={image} alt="songName" className="w-24 rounded mr-4" />
          <div>
            <button 
              className="text-2xl font-semibold cursor-pointer hover:bg-gradient-to-r hover:from-accent hover:via-green-300 hover:to-accent hover:bg-clip-text hover:text-transparent hover:animate-gradient"
              onClick={goToMusicPage}
            >
              {name}
            </button>
            <p className="text-neutral-400">{duration}</p>
            <p className="">
              <p className=" text-neutral-400">{artist}</p>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center">
          <TbHeart className="h-6 w-6" /> {/* to like the song  */}
          <button onClick={onclick}>
            <TbCirclePlus className="h-6 w-6" />
          </button>
          {/* to review the song (add on click here)*/}
        </div>
      </div>
      <hr />
    </>
  );
};

export default SongItem;
