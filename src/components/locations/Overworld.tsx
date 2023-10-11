import React from "react";
import { Zone } from "./Zone";
import { useAreasStore } from "../../stores/areasState";

type Props = {
  areasClass: string;
};

export const Overworld = ({ areasClass }: Props) => {
  const areas = useAreasStore((set) => set.overworld);
  return (
    <div className={areasClass}>
      {areas.map((area) => {
        return <Zone area={area} key={area.name} category="overworld" />;
      })}
    </div>
  );
};
