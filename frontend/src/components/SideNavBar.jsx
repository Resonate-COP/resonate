import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  IoPersonOutline,
  IoAlbumsOutline,
  IoNotificationsOutline,
  IoSettingsOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import { TbPlaylist, TbHeart, TbLibrary } from "react-icons/tb";
import Cookies from "js-cookie";

const SideNavBar = () => {
  const navigate = useNavigate(); // navigator

  const logout = () => {
    Cookies.remove("uid"); // remove stored user id
    navigate("/"); // go the initial page
  };

  return (
    <>
      <section className="fixed bg-primary h-full w-[12%] font-semibold py-6">
        <div className="flex items-center mb-12 mx-4 px-4 gap-2">
          <TbLibrary className="text-xl" />
          <div className="text-xl">My Library</div>
        </div>

        <div className="w-full text-xl flex flex-col gap-4">
          <NavLink
            to={"/user-liked-songs"}
            className="mx-4 py-2 px-4 rounded-lg hover:bg-background transition duration-200"
          >
            <div className="flex items-center gap-2">
              <TbHeart />
              <div>Liked Songs</div>
            </div>
          </NavLink>
          <NavLink
            to={"/user-playlist"}
            className="mx-4 py-2 px-4 rounded-lg hover:bg-background transition duration-200"
          >
            <div className="flex items-center gap-2">
              <TbPlaylist />
              <div>Playlist</div>
            </div>
          </NavLink>
          <NavLink
            to={"/user-artists"}
            className="mx-4 py-2 px-4 rounded-lg hover:bg-background transition duration-200"
          >
            <div className="flex items-center gap-2">
              <IoPersonOutline />
              <div>Artists</div>
            </div>
          </NavLink>
          <NavLink
            to={"/user-albums"}
            className="mx-4 py-2 px-4 rounded-lg hover:bg-background transition duration-200"
          >
            <div className="flex items-center gap-2">
              <IoAlbumsOutline />
              <div>Albums</div>
            </div>
          </NavLink>
          <NavLink
            to={"/notification"}
            className="mx-4 py-2 px-4 rounded-lg hover:bg-background transition duration-200"
          >
            <div className="flex items-center gap-2">
              <IoNotificationsOutline />
              <div>Notification</div>
            </div>
          </NavLink>
          <NavLink
            to={"/setting"}
            className="mx-4 py-2 px-4 rounded-lg hover:bg-background transition duration-200"
          >
            <div className="flex items-center gap-2">
              <IoSettingsOutline />
              <div>Setting</div>
            </div>
          </NavLink>
        </div>
        <button
          onClick={() => logout()}
          className="mx-4 py-2 px-4 rounded-lg hover:bg-red-500 absolute bottom-5 text-xl  transition duration-200"
        >
          <div className="flex items-center gap-2">
            <IoLogOutOutline />
            <div>Logout</div>
          </div>
        </button>
      </section>
    </>
  );
};

export default SideNavBar;
