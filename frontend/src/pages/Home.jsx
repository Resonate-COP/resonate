import React from "react";
import News from "../components/News";
import TopHit from "../components/TopHit";
import Suggest from "../components/Suggest";
import PopularWithFriend from "../components/PopularWithFriend";

const Home = () => {
  return (
    <section className="bg-background w-[99%] rounded-xl overflow-hidden p-6 grid grid-cols-2 grid-rows-4 gap-4">
      <News />
      <Suggest />
      <TopHit />
      <PopularWithFriend />
    </section>
  );
};

export default Home;
