import React from "react";
import { useLocationsStore } from "../stores/locationsState";
import { WayOfTheHero } from "./hints/WayOfTheHero";
import { Foolish } from "./hints/Foolish";
import { OtherHints } from "./hints/OtherHints";

export const AsideRight = () => {
  const overworld = useLocationsStore((set) => set.overworld);
  const dungeons = useLocationsStore((set) => set.dungeons);

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
