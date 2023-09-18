import React from "react";
import { useSpawnsStore } from "../../stores/randomSpawnsState";
import { Select } from "../Select";

export const RandomSpawns = () => {
  const spawns = useSpawnsStore((state) => state.spawns);
  const spawnsList = useSpawnsStore((state) => state.randomSpawnsList);
  const setSpawn = useSpawnsStore((state) => state.setSpawn);

  return (
    <div>
      {spawns.map((spawn) => (
        <div key={spawn.name}>
          <p className="mt-3">{spawn.name}</p>
          <Select
            func={setSpawn}
            datas={spawnsList}
            id={spawn.id}
          ></Select>
        </div>
      ))}
    </div>
  );
};
