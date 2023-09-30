import React from "react";
import { Element } from "../../stores/trackerState";

type Props = {
  className: string;
  element: Element;
  incrementElement: (
    id: number,
    category: "items" | "songs" | "dungeons"
  ) => void;
  decrementElement: (
    id: number,
    category: "items" | "songs" | "dungeons"
  ) => void;
  id: number;
  category: "items" | "songs" | "dungeons";
};

export const Image = ({
  className,
  element,
  incrementElement,
  decrementElement,
  id,
  category,
}: Props) => {
  const handleItemsClass = (element: Element): string => {
    if (element.inPossession !== 0) {
      return `${className}`;
    }
    return `${className} opacity-50 grayscale`;
  };

  return (
    <img
      className={handleItemsClass(element)}
      src={
        element.inPossession > 0 && element.id !== 30
          ? element.image[element.inPossession - 1]
          : element.image[0]
      }
      alt={element.name}
      onClick={() => incrementElement(id, category)}
      onContextMenu={() => decrementElement(id, category)}
    />
  );
};
