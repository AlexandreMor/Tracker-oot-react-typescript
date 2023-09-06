import React, { useState } from "react";
import { useHintsStore } from "../stores/hintsState";

export const AsideRight = () => {
  const [selectedTab, setSelectedTab] = useState("inputs");
  const paths = useHintsStore((set) => set.paths);
  const foolishes = useHintsStore((set) => set.foolishes);
  const always = useHintsStore((set) => set.always);
  const sometimes = useHintsStore((set) => set.sometimes);

  return <div className="w-22 me-2"></div>;
};
