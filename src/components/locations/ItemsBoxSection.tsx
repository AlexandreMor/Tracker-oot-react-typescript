import React from "react";
import { useAreasStore } from "../../stores/areasState";
import { Element } from "../../stores/trackerState";

type Props = {
  datas: Element[];
  idArea: number;
  idCheck: number;
  category: "overworld" | "dungeons";
};

export const ItemsBoxSection = ({
  datas,
  idArea,
  idCheck,
  category,
}: Props) => {
  const handleItemCheck = useAreasStore((set) => set.handleItemCheck);
  const divStyle = "grid xl:grid-cols-7 grid-cols-3";
  const imgStyle = "xl:w-3/6 w-2/6";
  return (
    <div className={divStyle}>
      {datas.map((data) => (
        <img
          className={imgStyle}
          src={data.image[0]}
          alt={data.name}
          key={data.name}
          onClick={() =>
            handleItemCheck(idArea, idCheck, category, data.image[0])
          }
        />
      ))}
    </div>
  );
};
