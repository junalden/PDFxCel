import React from "react";
import { Header, Footer, WhatsNew } from "../components";

export const News = () => {
  return (
    <main>
      <Header />

      <div className="flex justify-center items-center w-full px-4">
        <div className="w-full max-w-4xl">
          <WhatsNew />
        </div>
      </div>

      <Footer />
    </main>
  );
};
