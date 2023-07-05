import React from "react";
import Area from "./Area";
import { useLocationsStore } from "../../datas/locationsState";

function Overworld() {
  const areas = useLocationsStore((set) => set.overworld);
  return (
    <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12">
      {areas.map((area) => {
        return <Area area={area} key={area.name} />;
      })}
    </div>
  );
}

export default Overworld;
