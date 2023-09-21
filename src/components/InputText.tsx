import React from "react";
import { Check } from "../stores/locationsState";

type Props = {
  idArea: number;
  data: Check;
  category: "overworld" | "dungeons",
  func: (
    idArea: number,
    idCheck: number,
    category: "overworld" | "dungeons",
    value: string
  ) => void;
};

export const InputText = ({ idArea, data, category, func }: Props) => {
  return (
    <input
      type="text"
      value={data.player}
      className="w-1/5 h-1/4 bg-blue-800 rounded-sm py-0 ps-1 border"
      onChange={(e) => func(idArea, data.id, category, e.target.value)}
    />
  );
};
