import { useSpawnsStore } from "../stores/randomSpawnsState";

export const useRandomSpawns = () => {
  const randomSpawns = useSpawnsStore((state) => state.spawns);

  const childSpawn = randomSpawns[0].location;
  const adultSpawn = randomSpawns[1].location;

  return { childSpawn, adultSpawn };
};
