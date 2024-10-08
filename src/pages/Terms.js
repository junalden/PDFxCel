import React from "react";
import { Header, Footer, TermsOfUse } from "../components";

export const Terms = () => {
  return (
    <main>
      <Header />

      <div className="flex justify-center items-center w-full px-4">
        <div className="w-full max-w-4xl">
          <TermsOfUse />
        </div>
      </div>

      <Footer />
    </main>
  );
};
