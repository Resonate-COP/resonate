import React from "react";
import { Link } from "react-router-dom";
import SongItemNormal from "./SongItemNormal";

const PopularWithFriend = () => {
  return (
    <div className="bg-primary row-span-3 rounded-xl p-6 px-10">
      <div className="flex justify-between items-end mb-8">
        <div className="text-3xl font-semibold">Popular with friends</div>
        <Link to={"/popular-with-friends"} className="text-neutral-400 mr-2">
          see more
        </Link>
      </div>
      <div className="grid grid-cols-5 gap-8">
        {/* max 15 */}
        <SongItemNormal />
        <SongItemNormal />
        <SongItemNormal />
        <SongItemNormal />
        <SongItemNormal />
        <SongItemNormal />
        <SongItemNormal />
        <SongItemNormal />
        <SongItemNormal />
        <SongItemNormal />
        <SongItemNormal />
        <SongItemNormal />
        <SongItemNormal />
        <SongItemNormal />
        <SongItemNormal />
      </div>
    </div>
  );
};

export default PopularWithFriend;
