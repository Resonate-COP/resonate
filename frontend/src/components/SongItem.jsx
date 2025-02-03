import React from "react";

const SongItem = () => {
  return (
    <>
      <div>
        <img src="../../public/default/1.jpg" alt="songName" className="w-36" />
        <div>
          <p className="text-lg">song name</p>
          <p className="text-sm text-neutral-400">ablum name</p>
        </div>
      </div>
    </>
  );
};

export default SongItem;
