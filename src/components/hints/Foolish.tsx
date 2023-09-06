import React from "react";
import { Location } from "../../stores/locationsState";

type Props = {
  foolish: Location;
};

export const Foolish = ({ foolish }: Props) => {
  return <li key={foolish.name}>{foolish.name}</li>;
};
