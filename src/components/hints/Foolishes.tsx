import React from "react";
import { Locations } from "../../stores/locationsState";

type Props = {
  locations: Locations;
};

export const Foolishes = ({ locations }: Props) => {
  const overworldPaths = locations.overworld.filter(
    (location) => location.hint === "foolish"
  );
  const dungeonsPaths = locations.dungeons.filter(
    (location) => location.hint === "foolish"
  );
  const foolishes = [...overworldPaths, ...dungeonsPaths];

  return (
    <ul>
      {foolishes.map((location) => (
        <li key={location.name}>{location.name}</li>
      ))}
    </ul>
  );
};
