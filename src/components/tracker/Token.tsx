import React from "react";
import {Image} from "./Image";
import { Element, useTrackerStore } from "../../stores/trackerState";

type Props = {
  className:string;
  items: Element[];
}

function Token({ className, items }: Props) {
  const incrementElement = useTrackerStore((set) => set.increment);
  const decrementElement = useTrackerStore((set) => set.decrement);
  return (
    <div className="flex justify-center py-4 bg-blue-900">
      <Image
        className={className}
        element={items[30]}
        key={items[30].name}
        incrementElement={() => incrementElement(items[30].id, "items")}
        decrementElement={() => decrementElement(items[30].id, "items")}
        id={items[30].id}
        category={"dungeons"}
      />
      <span className="justify-self-start self-center ms-2">
        {items[30].inPossession}
      </span>
    </div>
  );
}

export default Token;
