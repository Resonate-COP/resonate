import React from "react";
import SongItem from "./SongItem";

const TopHit = () => {
  return (
    <div className="row-span-3 bg-primary rounded-xl p-6 px-10">
      <div className="text-3xl font-semibold mb-8 bg-gradient-to-r from-accent via-green-300 to-accent bg-clip-text text-transparent animate-gradient">
        Top Hit Songs
      </div>
      <div className="flex flex-col gap-4 ">
        {/* max is 7  */}
        <SongItem />
        <SongItem />
        <SongItem />
        <SongItem />
        <SongItem />
        <SongItem />
        <SongItem />
      </div>
    </div>
  );
};

export default TopHit;
