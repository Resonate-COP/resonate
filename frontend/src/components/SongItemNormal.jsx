import React from "react";

const SongItemNormal = () => {
  return (
    <>
      <div>
        <img src="../../images/default/3.jpg" alt="title" className="w-28" />
        <div>
          <p className="text-lg">song name</p>
          <p className="text-sm text-neutral-400">artist name</p>
        </div>
      </div>
    </>
  );
};

export default SongItemNormal;
