import React from "react";
import { Image } from "./Image";
import { Element, useTrackerStore } from "../../stores/trackerState";

type Props = {
  className: string;
  items: Element[];
};

function Token({ className, items }: Props) {
  const incrementElement = useTrackerStore((set) => set.increment);
  const decrementElement = useTrackerStore((set) => set.decrement);
  return (
    <div className="flex flex-col items-center py-4 bg-blue-900">
      <Image
        className={className}
        element={items[30]}
        key={items[30].name}
        incrementElement={() => incrementElement(items[30].id, "items")}
        decrementElement={() => decrementElement(items[30].id, "items")}
        id={items[30].id}
        category={"dungeons"}
      />
      <span className="z-10 text-sm -mt-1 bg-zinc-800 rounded-full px-1.5">
        {items[30].inPossession}
      </span>
    </div>
  );
}

export default Token;
