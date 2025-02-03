import React from "react";
import SongItem from "./SongItem";
import { Link } from "react-router-dom";

const Trending = () => {
  return (
    <section className="p-6 max-h-[60vh]">
      <div className="flex justify-between items-center">
        <div className="text-4xl mb-8 font-bold">Trending Songs</div>
        <Link to={"/trending"} className="text-lg text-secondary">
          see all
        </Link>
      </div>

      <div className="flex gap-8 flex-wrap">
        {/* song bar 2 tan full twr yin showmore pya ya ml */}
        <SongItem />
        <SongItem />
        <SongItem />
        <SongItem />
        <SongItem />
        <SongItem />
        <SongItem />
        <SongItem />
        <SongItem />
        <SongItem />
        <SongItem />
        <SongItem />
        <SongItem />
        <SongItem />
      </div>
    </section>
  );
};

export default Trending;
