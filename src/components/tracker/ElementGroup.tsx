import React from "react";
import Image from "./Image";
import { Element, useTrackerStore } from "../../datas/trackerState";

export default function ElementGroup({ elements, className, category }) {
  const incrementElement = useTrackerStore((set) => set.increment);
  const decrementElement = useTrackerStore((set) => set.decrement);
  const elementsClassName : string = "grid gap-x-1 gap-y-5 pb-2 border-x-2 border-black pt-1";
  const songsClassName: string = `${elementsClassName} + bg-emerald-900 grid-cols-6`;
  const itemsClassName: string = `${elementsClassName} + bg-blue-900 border-t-2 rounded-t-lg grid-cols-7`;

  return (
    <div className={category === "items" ? itemsClassName : songsClassName}>
      {elements.map((element : Element) => (
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
}
