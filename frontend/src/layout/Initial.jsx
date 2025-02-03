import React from "react";
import { Link } from "react-router-dom";

const Initial = () => {
  return (
    <section className="h-screen bg-background flex justify-center items-center">
      <Link to={"/login"} className="text-xl text-text">
        RESONATE
      </Link>
    </section>
  );
};

export default Initial;
