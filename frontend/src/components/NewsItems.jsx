import React from "react";
import { Link } from "react-router-dom";

const NewsItems = () => {
  return (
    <section className="row-span-1 h-[30vh] p-6 px-10 orange-gra rounded-xl overflow-hidden flex justify-between">
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
      <div>
        <img src="../../images/default/4.jpg" alt="title" className="h-full" />
      </div>
    </section>
  );
};

export default NewsItems;
