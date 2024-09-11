import React from "react";
import { Header, Footer } from "../components";
import { Article01 } from "../components/Article01";
export const Article = () => {
  return (
    <main>
      <Header />

      <div className="flex justify-center items-center w-full px-4">
        <div className="w-full max-w-4xl">
          <Article01 />
        </div>
      </div>

      <Footer />
    </main>
  );
};
