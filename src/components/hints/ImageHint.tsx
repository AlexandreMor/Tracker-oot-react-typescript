import React from "react";

export const ImageHint = ({ check }) => {
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
