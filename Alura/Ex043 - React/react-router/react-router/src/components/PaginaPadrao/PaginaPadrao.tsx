import React from "react";
import { Banner } from "../Banner/Banner";
import { Outlet } from "react-router-dom";

export const PaginaPadrao: React.FC = () => {
  return (
    <main>
      <Banner/>
      <Outlet/>
    </main>
  );
}
