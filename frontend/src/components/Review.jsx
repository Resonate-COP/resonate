import React from "react";
import { TbHeart, TbCirclePlus, TbStar, TbStarFilled } from "react-icons/tb";

const Review = () => {
  return (
    <section className="p-4 mb-4 bg-primary rounded-lg flex">
      {/* icon */}
      <div className="flex flex-col gap-4 items-start mt-4 mr-4">
        <TbHeart className="h-6 w-6" />
        <TbCirclePlus className="h-6 w-6" />
      </div>
      {/* song  */}
      <div className="pr-10 border-r-2 border-neutral-700">
        <div className="flex items-start">
          <img
            src="../../images/default/3.jpg"
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
        <div className="mt-4 flex gap-1">
          <TbStarFilled className="starFill" />
          <TbStarFilled className="starFill" />
          <TbStarFilled className="starFill" />
          <TbStar className="w-6 h-6" />
          <TbStar className="w-6 h-6" />
        </div>
      </div>

      {/* review  */}
      <div className="w-full text-end">
        {/* username ang profile  */}
        <div className="flex items-center justify-end">
          <p className="mr-2">UserName</p>
          <img
            src="../../images/default/defaultProfile.png"
            alt="username"
            width={30}
          />
        </div>
        {/* review-content  */}
        <div className="mt-2 px-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
          consequatur at repellendus neque tempore ratione eius totam doloremque
          dolorem soluta.t repellendus neque tempore ratione eius totam Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Animi, consequatur
          at repellendus neque tempore ratione eius totam doloremque dolorem
          soluta.t repellendus neque tempore ratione eius totam doloremque ipsum
          dolor sit amet consectetur adipisicing elit. Animi, consequatur at
          repellendus neque tempore ratione eius totam doloremque dolorem
          soluta.t repellendus neque tempore ratione eius totam doloremque ipsum
          dolor sit amet consectetur adipisicing elit. Animi, consequatur at
          repellendus neque tempore ratione eius totam doloremque dolorem
          soluta.t repellendus neque tempore ratione eius totam doloremque
          dolorem soluta.
        </div>
      </div>
    </section>
  );
};

export default Review;
