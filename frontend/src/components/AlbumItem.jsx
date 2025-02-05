import React from "react";

const AlbumItem = () => {
  return (
    <>
      <div>
        <img src="../../images/default/2.jpg" alt="title" className="w-28" />
        <div>
          <p className="text-lg">album name</p>
          <p className="text-sm text-neutral-400">artist name</p>
        </div>
      </div>
    </>
  );
};

export default AlbumItem;
