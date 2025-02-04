import React from "react";

const News = () => {
  return (
    <section className="p-6 px-10 h-[30vh] orange-gra rounded-xl flex justify-between relative">
      <div className="w-1/2">
        <p className="text-primary text-4xl font-bold">Grammy Awards 2025</p>
        <p className="text-primary text-xl mt-4">
          Recording of the year -
          <span className="font-bold text-primary">
            Kendrick Lamar - Not Like Us
          </span>
        </p>
        <p className="text-primary text-xl mt-6">
          The 67th Grammy Awards ceremony took place this Sunday, February 2,
          2025 in Los Angeles, USA. The new ceremony featured live performances
          from Billie Eilish, Chappell Roan, Sabrina Carpenter, Benson Boone and
          Raye, Charli XCX, Shakira and Lady Gaga with Bruno Mars,
          performing"California Dreamin".
        </p>
      </div>
      <div className="">
        <img
          className="w-72 absolute right-10 bottom-5"
          src="https://www.purchase.edu/live/image/gid/22/width/600/height/600/crop/1/src_region/0,0,2084,2084/25380_Gramophone_Icon_Only_Full_Color-01.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default News;
