import React from "react";
import Area from "./Area";
import { useLocationsStore } from "../../datas/locationsState";

function Overworld({areasClass}) {
  const areas = useLocationsStore((set) => set.overworld);
  return (
    <div className={areasClass}>
      {areas.map((area) => {
        return <Area area={area} key={area.name} category="overworld" />;
      })}
    </div>
  );
}

export default Overworld;
