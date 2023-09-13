import React from "react";

export const Tabulation = ({ selectedTab, setSelectedTab }) => {
  return (
    <nav className="self-center">
      <button
        className={`py-2 px-3 ${
          selectedTab === "Overworld"
            ? "text-blue-500 border-b-2 border-blue-500 font-medium"
            : ""
        }`}
        onClick={() => setSelectedTab("Overworld")}
      >
        Overworld
      </button>
      <button
        className={`py-2 px-3 ${
          selectedTab === "Dungeons"
            ? "text-blue-500 border-b-2 border-blue-500 font-medium"
            : ""
        }`}
        onClick={() => setSelectedTab("Dungeons")}
      >
        Dungeons
      </button>
    </nav>
  );
};
