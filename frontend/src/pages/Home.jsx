import React from "react";
import Trending from "../components/Trending";

const Home = () => {
  return (
    <section className="ml-[12%] pb-5">
      <div className="w-full text-center py-4 font-semibold">RESONATE</div>
      <div className="bg-primary h-[200vh] w-[99%] rounded-xl overflow-hidden">
        <Trending />
      </div>
    </section>
  );
};

export default Home;
