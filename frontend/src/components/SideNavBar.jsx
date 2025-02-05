import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const SideNavBar = () => {
  const navigate = useNavigate(); // navigator

  const logout = () => {
    Cookies.remove('uid'); // remove stored user id
    navigate('/'); // go the initial page
  }

  return (
    <>
      <section className="fixed bg-background h-full w-[12%] font-semibold py-4">
        <div className="flex items-center mb-8 mx-4">
          <img
            src="../../public/default/defaultProfile.png"
            alt="userProfile"
            className="w-8 object-cover"
          />
          <div className="text-xl ml-4">Hurricane</div>
        </div>

        <div className="w-full text-xl flex flex-col gap-4">
          <NavLink to={"/main"} className="mx-4 py-2 px-4 rounded-lg">
            Home
          </NavLink>
          <NavLink to={"/search"} className="mx-4 py-2 px-4 rounded-lg">
            Search
          </NavLink>
          <NavLink to={"/profile"} className="mx-4 py-2 px-4 rounded-lg">
            Profile
          </NavLink>
          <NavLink to={"/friends"} className="mx-4 py-2 px-4 rounded-lg">
            Friends
          </NavLink>
        </div>
        <button
          onClick={() => logout()}
          className="absolute bottom-4 p-4 mx-4 text-lg hover:text-red-600"
        >
          Logout
        </button>
      </section>
    </>
  );
};

export default SideNavBar;
