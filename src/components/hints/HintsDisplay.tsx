import React from "react";
import { Paths } from "./paths";
import { Foolishes } from "./Foolishes";
import { AlwaysHints } from "./AlwaysHints";
import { OtherHints } from "./OtherHints";
import { useLocationsStore } from "../../stores/locationsState";

export const HintsDisplay = () => {
    const locations = useLocationsStore((state) => state);
  return (
    <>
      <Paths locations={locations} />
      <Foolishes locations={locations}  />
      <AlwaysHints locations={locations}  />
      <OtherHints locations={locations}  />
    </>
  );
};
