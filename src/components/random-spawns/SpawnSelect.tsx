import React from "react";
import { useSpawnsStore } from "../../stores/randomSpawnsState";

type Props = {
  id: number;
};

export const SpawnSelect = ({ id }: Props) => {
  const spawnsList = useSpawnsStore((state) => state.randomSpawnsList);
  const setSpawn = useSpawnsStore((state) => state.setSpawn);

  return (
    <select
      className="bg-blue-700 rounded-lg ps-1 dark:focus:ring-slate-300"
      onChange={(e) => setSpawn(id, e.target.value)}
    >
      {spawnsList.map((spawnList) => (
        <option value={spawnList.name} key={spawnList.name}>
          {spawnList.name}
        </option>
      ))}
    </select>
  );
};
