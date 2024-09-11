import { useState } from "react";
import { SideNav } from "../components/SideNav";
import { Outlet } from "react-router-dom";

export const Dashboard = () => {
  return (
    <main>
      {/* // <main className="flex flex-col md:flex-row"> */}
      <SideNav />

      <div className="py-4">
        <Outlet />{" "}
        {/* This renders the component corresponding to the current route */}
        {/* https://reactrouter.com/en/main/components/outlet */}
      </div>
    </main>
  );
};
