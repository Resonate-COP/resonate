import React from "react";
import { TbHeart, TbCirclePlus } from "react-icons/tb";

const SongItem = () => {
  return (
    <>
      <div className="flex w-full justify-between">
        <div className="flex items-start">
          <img
            src="../../images/default/1.jpg"
            alt="songName"
            className="w-24 rounded mr-4"
          />
          <div>
            <p className="text-2xl font-semibold">song name</p>
            <p className="text-neutral-400">3:12</p>
            <p className="">
              <p className=" text-neutral-400">Artist name . Ablum name</p>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center">
          <TbHeart className="h-6 w-6" />
          <TbCirclePlus className="h-6 w-6" />
        </div>
      </div>
      <hr />
    </>
  );
};

export default SongItem;
