import React from "react";
import { Outlet } from "react-router-dom";
import SideNavBar from "../components/SideNavBar";

const Main = () => {
  return (
    <section className="h-max bg-background relative">
      <SideNavBar />
      <Outlet />
    </section>
  );
};

export default Main;
