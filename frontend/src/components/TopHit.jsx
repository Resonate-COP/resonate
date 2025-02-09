
import React, { useEffect, useState } from "react";
import SongItem from "./SongItem";
import { getTopHits } from "../../songApi";

const TopHit = () => {
  const [songList, setSongList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getTopHits();
        setSongList(result);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  console.log(songList);

  return (
    <div className="row-span-3 bg-primary rounded-xl p-6 px-10">
      <div className="text-3xl font-semibold mb-8 bg-gradient-to-r from-accent via-green-300 to-accent bg-clip-text text-transparent animate-gradient">
        Top Hit Songs
      </div>
      <div className="flex flex-col gap-4">
        {/* Limit results to a maximum of 7 */}
        {songList.slice(0, 7).map((song, index) => (
          <SongItem key={index} song={song} />
        ))}
      </div>
    </div>
  );
};

export default TopHit;
