import React from "react";
import { Element } from "../../stores/trackerState";

function Image(props: {
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
}) {

  const handleItemsClass = (element : Element) : string => {
    if (element.inPossession !== 0) {
      return `${props.className} hover:grayscale-0 hover:opacity-70`;
    }
    return `${props.className} opacity-50 grayscale hover:grayscale-0 hover:opacity-70`;
  };

  return (
    <img
      className={handleItemsClass(props.element)}
      src={
        props.element.inPossession > 0 && props.element.id !== 30
          ? props.element.image[props.element.inPossession - 1]
          : props.element.image[0]
      }
      alt={props.element.name}
      onClick={() => props.incrementElement(props.id, props.category)}
      onContextMenu={() => props.decrementElement(props.id, props.category)}
    />
  );
}

export default Image;
