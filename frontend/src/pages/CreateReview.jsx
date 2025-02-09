import React from "react";
import { Form, useParams } from "react-router-dom";

const CreateReview = () => {
  const { songid } = useParams();

  return (
    <section className="bg-background w-[99%] h-[89.4vh] rounded-xl overflow-hidden px-6 ">
      <div className="text-2xl font-bold py-4">Create Your Review</div>
      <div className="flex items-start">
        <img
          src="../../images/default/1.jpg"
          alt="songName"
          className="w-24 rounded mr-4"
        />
        <div>
          <p className="text-2xl font-semibold">{songid}</p>
          <p className="text-neutral-400">3:12</p>
          <p className="">
            <p className=" text-neutral-400">Artist name . Ablum name</p>
          </p>
        </div>
      </div>
      <Form className="mt-4">
        <textarea
          name=""
          id=""
          className="w-full p-4 text-lg bg-primary"
        ></textarea>
        <button className="mt-4 px-4 py-2 bg-primary float-end">Done</button>
      </Form>
    </section>
  );
};

export default CreateReview;
