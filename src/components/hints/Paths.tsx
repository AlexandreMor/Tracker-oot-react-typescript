import React from "react";
import { Locations, useLocationsStore } from "../../stores/locationsState";
import { Path } from "./Path";

type Props = {
  locations: Locations;
};

export const Paths = ({ locations }: Props) => {
  const overworldPaths = locations.overworld.filter(
    (location) => location.hint === "path"
  );
  const dungeonsPaths = locations.dungeons.filter(
    (location) => location.hint === "path"
  );
  const paths = [...overworldPaths, ...dungeonsPaths];
  return (
    <ul>
      {paths.map((path) => (
        <Path path={path} />
      ))}
    </ul>
  );
};
