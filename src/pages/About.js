import React from "react";
import { Header, Footer } from "../components";
import { AboutCard } from "../components/AboutCard";
// import { ContactCard } from "../components/ContactCard";

export const About = () => {
  return (
    <main>
      <Header />

      <div className="flex justify-center items-center w-full px-4">
        <div className="w-full max-w-4xl">
          <AboutCard />
        </div>
      </div>

      <Footer />
    </main>
  );
};
