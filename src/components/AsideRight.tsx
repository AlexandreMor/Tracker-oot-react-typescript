import React from "react";
import { useAreasStore } from "../stores/areasState";
import { WayOfTheHero } from "./hints/WayOfTheHero";
import { Foolish } from "./hints/Foolish";
import { OtherHints } from "./hints/OtherHints";

export const AsideRight = () => {
  const overworld = useAreasStore((set) => set.overworld);
  const dungeons = useAreasStore((set) => set.dungeons);

  return (
    <section className="lg:w-90 w-1/12 flex flex-col items-start text-xs lg:text-base border rounded-t-lg rounded-b-lg bg-gray-800 ps-1">
      <WayOfTheHero category={overworld} />
      <WayOfTheHero category={dungeons} />
      <Foolish category={overworld} />
      <Foolish category={dungeons} />
      <OtherHints category={overworld} />
      <OtherHints category={dungeons} />
    </section>
  );
};
