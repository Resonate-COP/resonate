import React from "react";
import { NavLink } from "react-router-dom";
import {
  RiHomeSmile2Fill,
  RiStarSmileFill,
  RiSearchEyeFill,
} from "react-icons/ri";

const TopNavBar = () => {
  return (
    <>
      <div className="ml-[12%] bg-background w-full pt-4 font-semibold text-xl flex justify-between items-center fixed">
        <div className="flex gap-6">
          <NavLink to={"/main"} className="px-6 rounded-t-lg">
            <div className="flex items-center gap-2">
              <RiHomeSmile2Fill />
              <div>Home</div>
            </div>
          </NavLink>
          <NavLink to={"/main/reviews"} className="px-6 rounded-t-lg">
            <div className="flex items-center gap-2">
              <RiStarSmileFill />
              <div>Reviews</div>
            </div>
          </NavLink>
          <NavLink to={"/main/search"} className="px-6 rounded-t-lg">
            <div className="flex items-center gap-2">
              <RiSearchEyeFill />
              <div>Search</div>
            </div>
          </NavLink>
        </div>
        <div className="mr-[12%] flex gap-4 items-center pr-10">
          <p>Hurricane</p>
          <img
            src="../../images/default/defaultProfile.png"
            alt="username"
            className="w-10"
          />
        </div>
      </div>
    </>
  );
};

export default TopNavBar;
