import React, { useEffect, useState } from "react";
import { TbHeart, TbCirclePlus, TbStar, TbStarFilled } from "react-icons/tb";
import { searchSongById } from "../../songApi";
import { fetchData } from "../../api";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

const Review = ({ data }) => {
  const [loading, setLoading] = useState(false); // to handle loading
  const [songData, setSongData] = useState({}); // to store song data
  const [userData, setUserData] = useState({}); // to store user data
  const [artist, setArtist] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const getSongData = async () => {
      setLoading(true);
      try {
        const result = await searchSongById(data.song_id);
        setSongData(result);
        setArtist(result.artists[0].name);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    const getUserData = async () => {
      setLoading(true);
      try {
        const result = await fetchData(`/users/${data.user_id}`);
        setUserData(result[0]);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    getSongData();
    getUserData();
  }, []);

  function msToMinutesSeconds(ms) {
    let minutes = Math.floor(ms / 60000);
    let seconds = Math.floor((ms % 60000) / 1000);
    
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }

  return (
    <section className="p-4 mb-4 bg-primary rounded-lg flex">
      {/* song  */}
      <div className="pr-10 border-r-2 border-neutral-700">
        <div className="flex items-start">
          <img
            src={songData?.album?.images[0]?.url}
            alt="songName"
            className="w-24 rounded mr-4"
          />
          <div>
            <button 
              className="text-2xl font-semibold cursor-pointer hover:text-neutral-400 duration-300"
              onClick={() => navigate(`/main/${songData.id}`)}
            >
              {songData?.name}
            </button>
            <p className="text-neutral-400">{msToMinutesSeconds(songData?.duration_ms)}</p>
            <p className="">
              <p className=" text-neutral-400">{artist} . {songData?.album?.name}</p>
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
          <p className="mr-2">{userData.username}</p>
          <img
            src="../../images/default/defaultProfile.png"
            alt="username"
            width={30}
          />
        </div>
        {/* review-content  */}
        <div className="mt-2 px-2">{data.caption}</div>
      </div>
    </section>
  );
};

export default Review;
