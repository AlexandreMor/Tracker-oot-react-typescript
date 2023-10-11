import React from "react";
import { Check } from "../stores/areasState";

type Props = {
  idArea: number;
  check: Check;
  category: "overworld" | "dungeons";
  placeholder: string;
  func: (
    idArea: number,
    idCheck: number,
    category: "overworld" | "dungeons",
    value: string
  ) => void;
};

export const InputText = ({
  idArea,
  check,
  category,
  placeholder,
  func,
}: Props) => {
  return (
    <input
      type="text"
      value={placeholder === "Pla" ? check.player : check.rupee}
      placeholder={placeholder}
      className="lg:w-7 w-5 h-5 bg-blue-800 rounded-sm py-0 ps-1 ms-1.5 lg:text-sm text-xs lg:font-semibold text-center"
      onChange={(e) => func(idArea, check.id, category, e.target.value)}
    />
  );
};
