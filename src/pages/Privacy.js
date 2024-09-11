import React from "react";
import { Header, Footer, PrivacyPolicy } from "../components";

export const Privacy = () => {
  return (
    <main>
      <Header />
      <div className="flex justify-center items-center w-full px-4">
        <div className="w-full max-w-4xl">
          <PrivacyPolicy />
        </div>
      </div>
      <Footer />
    </main>
  );
};
