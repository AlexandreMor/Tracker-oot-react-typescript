import React from "react";

type Props = {
  selectedTab : string;
  setSelectedTab : React.Dispatch<React.SetStateAction<string>>
}

export const Tabulation = ({ selectedTab, setSelectedTab }: Props) => {
  const style = "text-zinc-400 border-b-2 font-semibold border-zinc-400";
  return (
    <nav className="self-center">
      <button
        className={`py-2 px-3 ${selectedTab === "Overworld" ? style : ""}`}
        onClick={() => setSelectedTab("Overworld")}
      >
        Overworld
      </button>
      <button
        className={`py-2 px-3 ${selectedTab === "Dungeons" ? style : ""}`}
        onClick={() => setSelectedTab("Dungeons")}
      >
        Dungeons
      </button>
    </nav>
  );
};
