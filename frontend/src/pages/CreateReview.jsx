import React, { useEffect, useState } from "react";
import { Form, Navigate, useNavigate, useParams } from "react-router-dom";
import { searchSongById } from "../../songApi";
import { postData } from "../../api";
import Cookies from 'js-cookie';

const CreateReview = () => {
  const [loading, setLoading] = useState(false); // to handle loading
  const { songid } = useParams(); // get song id from the url
  const [songData, setSongData] = useState(); // to store song info
  const [caption, setCaption] = useState(''); // caption input
  const navigate = useNavigate(); // to navigate

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const result = await searchSongById(songid); // get song data with song Id
        console.log(result);
        setSongData(result);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  const submitReview = async () => {
    setLoading(true);
    try {
      const result = await postData('/posts', {
        user_id: Cookies.get('uid'),
        song_id: songid,
        caption: caption,
      })
      navigate('/main')
    } catch (err) {
      console.log(err);
    }
  }

  function msToMinutesSeconds(ms) {
    let minutes = Math.floor(ms / 60000);
    let seconds = Math.floor((ms % 60000) / 1000);
    
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }

  return (
    <section className="bg-background w-[99%] h-[89.4vh] rounded-xl overflow-hidden px-6 ">
      <div className="text-2xl font-bold py-4">Create Your Review</div>
      <div className="flex items-start">
        <img
          src={songData?.album.images[0].url}
          alt="songName"
          className="w-24 rounded mr-4"
        />
        <div>
          <p className="text-2xl font-semibold">{songData?.name}</p>
          <p className="text-neutral-400">{msToMinutesSeconds(songData?.duration_ms)}</p>
          <p className="">
            <p className=" text-neutral-400">{songData?.artists[0].name} . {songData?.album.name}</p>
          </p>
        </div>
      </div>
      <Form onSubmit={() => submitReview()} className="mt-4">
        <textarea
          name=""
          id=""
          className="w-full p-4 text-lg bg-primary"
          onChange={(e) => setCaption(e.target.value)}
        ></textarea>
        <button type="submit" className="mt-4 px-4 py-2 bg-primary float-end">Done</button>
      </Form>
    </section>
  );
};

export default CreateReview;
