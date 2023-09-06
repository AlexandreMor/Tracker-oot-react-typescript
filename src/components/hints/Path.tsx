import React from "react";
import { Location } from "../../stores/locationsState";

type Props = {
  path: Location;
};

export const Path = ({ path }: Props) => {
  return (
    <>
      <li key={path.name}>{path.name}</li>
      <div>
        {path.checks
          .filter((check) => check.item !== "")
          .map((check) => (
            <img key={check.item} src={check.item} />
          ))}
      </div>
    </>
  );
};
