import React, { useState } from "react";

function Tabulation({selectedTab, setSelectedTab}) {
  
  return (
    <nav>
      <button
        className={`py-2 px-4 ${
          selectedTab === "Overworld"
            ? "text-blue-500 border-b-2 border-blue-500 font-medium"
            : ""
        }`}
        onClick={() => setSelectedTab("Overworld")}
      >
        Overworld
      </button>
      <button
        className={`py-2 px-4 ${
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
}

export default Tabulation;
