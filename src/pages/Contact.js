import React from "react";
import { Header, Footer } from "../components";
import { ContactCard } from "../components/ContactCard";

export const Contact = () => {
  return (
    <main>
      <Header />

      <div className="flex justify-center items-center w-full px-4">
        <div className="w-full max-w-4xl">
          <ContactCard />
        </div>
      </div>

      <Footer />
    </main>
  );
};
