import React from "react";
import { Link } from "react-router-dom";

const NewsItems = () => {
  return (
    <section className="p-6 px-10 h-[30vh] orange-gra rounded-xl overflow-hidden flex justify-between">
      <div className="w-1/2 text-background">
        <div className="text-3xl font-semibold text-background mb-4">
          News Title
        </div>
        <div className="text-lg text-background line-clamp-4 mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
          suscipit, neque molestias id tempora nam, sit placeat, totam voluptas
          iste corrupti. Delectus libero ducimus qui vitae debitis aliquid autem
          voluptatem?
        </div>
        <Link className="text-lg">See more ..</Link>
      </div>
      <img src="../../images/default/4.jpg" alt="title" />
    </section>
  );
};

export default NewsItems;
