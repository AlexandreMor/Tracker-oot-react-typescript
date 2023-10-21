import React from "react";
import { Check } from "../../stores/areasState";

type Props = {
  check: Check;
};

export const ImageHint = ({ check }: Props) => {
  return (
    <div className="flex flex-col">
      <img
        src={check.item}
        alt={check.item}
        className="2xl:w-6 2xl:h-6 w-4 h-4"
      />
      {check.player!=="" && <span className="-mt-2 text-sm font-semibold text-center">{check.player}</span>}
    </div>
  );
};
