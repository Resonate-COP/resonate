import React from "react";
import { Link } from "react-router-dom";

const Initial = () => {
  return (
    <section className="h-screen bg flex justify-center items-center">
      <Link to={"/login"} className="text-xl text-background">
        RESONATE
      </Link>
    </section>
  );
};

export default Initial;
