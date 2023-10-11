import React from "react";
import { Check } from "../../stores/areasState";

type Props = {
  check: Check;
};

export const ImageHint = ({ check }: Props) => {
  return (
    <>
      <img
        src={check.item}
        alt={check.item}
        className="2xl:w-6 2xl:h-6 w-4 h-4"
      />
    </>
  );
};
