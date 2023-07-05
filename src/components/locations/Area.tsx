import React from "react";
import Check from "./Check";

function Area({ area }) {
  return (
    <div className="mt-2 mx-2 bg-sky-950  rounded-t-lg rounded-b-lg tracking-tight">
      <h1 className="text-lg border-b-2 mb-2 font-bold text-center">{area.name}</h1>
      <ul>
        {area.checks.map((check) => {
          return <Check check={check} key={check.name} />;
        })}
      </ul>
    </div>
  );
}

export default Area;
