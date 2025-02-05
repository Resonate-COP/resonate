import React from "react";
import AlbumItem from "./AlbumItem";
import { Link } from "react-router-dom";

const Suggest = () => {
  return (
    <div className="bg-primary rounded-xl py-6 px-10">
      <div className="text-3xl font-semibold mb-8">Suggest For You</div>

      <div className="flex justify-between gap-8">
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
      </div>
    </div>
  );
};

export default Suggest;
