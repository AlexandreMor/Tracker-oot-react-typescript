import React from "react";
import { Image } from "./Image";
import { Element, useTrackerStore } from "../../stores/trackerState";

type Props = {
  elements: Element[];
  className: string;
  category: "items" | "songs";
};

export const ElementGroup = ({ elements, className, category }: Props) => {
  const incrementElement = useTrackerStore((set) => set.increment);
  const decrementElement = useTrackerStore((set) => set.decrement);
  const elementsClassName: string = "grid gap-x-1 gap-y-5 pb-2 pt-1";
  const songsClassName: string = `${elementsClassName} + bg-emerald-900 grid-cols-6`;
  const itemsClassName: string = `${elementsClassName} + bg-blue-900 grid-cols-7 rounded-lg px-1`;

  return (
    <div className={category === "items" ? itemsClassName : songsClassName}>
      {elements.map((element: Element) => (
        <Image
          className={className}
          element={element}
          key={element.name}
          incrementElement={() => incrementElement(element.id, category)}
          decrementElement={() => decrementElement(element.id, category)}
          id={element.id}
          category={category}
        />
      ))}
    </div>
  );
};
