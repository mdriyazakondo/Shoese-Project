import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Navbar />
      <main className=" mt-15">
        <Outlet />
      </main>
    </div>
  );
};

export default Main;
