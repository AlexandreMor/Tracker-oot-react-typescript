import React from "react";
import { SpawnSelect } from "./SpawnSelect";
import { useSpawnsStore } from "../../stores/randomSpawnsState";

export const RandomSpawns = () => {
  const spawns = useSpawnsStore((state) => state.spawns);

  return (
    <div>
      {spawns.map((spawn) => (
        <div key={spawn.name}>
          <p className="mt-3">{spawn.name}</p>
          <SpawnSelect key={spawn.name} id={spawn.id} />
        </div>
      ))}
    </div>
  );
};
