import React from "react";
import { AsideLeft } from "./AsideLeft";
import { AsideRight } from "./AsideRight";
import { CentralContent } from "./CentralContent";

export const Home = () => {
  return (
    <section id="home" className="flex xl:justify-around justify-start">
      <AsideLeft />
      <CentralContent />
      <AsideRight />
    </section>
  );
};
