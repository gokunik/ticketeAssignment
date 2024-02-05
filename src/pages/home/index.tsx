import React from "react";
import { Footer } from "./components/Footer";
import { NavMenu } from "./components/Navmenu";
import { Welcome } from "./components/Welcome";

export const Home: React.FC = () => {
  return (
    <div className="h-screen flex flex-col">
      <NavMenu />
      <Welcome />
      <Footer />
    </div>
  );
};
