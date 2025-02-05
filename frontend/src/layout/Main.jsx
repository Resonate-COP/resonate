import React from "react";
import { Outlet } from "react-router-dom";
import SideNavBar from "../components/SideNavBar";
import TopNavBar from "../components/TopNavBar";

const Main = () => {
  return (
    <section className="h-max bg-background relative">
      <SideNavBar />
      <TopNavBar />
      <section className="ml-[12%] pt-20 pb-5">
        <Outlet />
      </section>
    </section>
  );
};

export default Main;
