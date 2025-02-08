import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  RiHomeSmile2Fill,
  RiStarSmileFill,
  RiSearchEyeFill,
} from "react-icons/ri";
import { fetchData } from "../../api";
import Cookies from "js-cookie";

const TopNavBar = () => {
  const [loading, setLoading] = useState(false); // to handle loading
  const [userData, setUserData] = useState([]); // user data

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const result = await fetchData(`/users/${Cookies.get("uid")}`); // get user data using stored user id
        setUserData(result[0]);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div className="ml-[12%] bg-background w-full py-4 font-semibold text-xl flex justify-between items-center fixed">
        <div className="flex gap-6">
          <NavLink to={"/main"} className="px-6 rounded-t-lg">
            <div className="flex items-center gap-2">
              <RiHomeSmile2Fill />
              <div>Home</div>
            </div>
          </NavLink>
          <NavLink to="/main/reviews" className="px-6 rounded-t-lg">
            <div className="flex items-center gap-2 active">
              <RiStarSmileFill className="active" />
              <div className="active">Reviews</div>
            </div>
          </NavLink>
          <NavLink to={"/main/search"} className="px-6 rounded-t-lg">
            <div className="flex items-center gap-2">
              <RiSearchEyeFill className="active" />
              <div className="active">Search</div>
            </div>
          </NavLink>
        </div>
        <div className="mr-[12%] flex gap-4 items-center pr-10">
          <p>{userData.username}</p>
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
