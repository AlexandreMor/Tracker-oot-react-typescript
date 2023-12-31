import { create } from "zustand";
import { produce } from "immer";

type randomSpawn = {
  id: number;
  name: string;
  location: string;
};

type randomSpawns = randomSpawn[];

export type Spawns = {
  id: number;
  name: string;
};

type SpawnsList = {
  spawns: randomSpawns;
  randomSpawnsList: Spawns[];
  setSpawn: (id: number, value: string) => void;
};

export const useSpawnsStore = create<SpawnsList>((set) => ({
  spawns: [
    { id: 0, name: "Child spawn", location: "" },
    { id: 1, name: "Adult spawn", location: "" },
  ],
  randomSpawnsList: [
    { id: 0, name: "" },
    { id: 1, name: "Desert C." },
    { id: 2, name: "Dins Fairy" },
    { id: 3, name: "DMT fairy" },
    { id: 4, name: "DMC upper" },
    { id: 5, name: "DMC lower" },
    { id: 6, name: "DMC fairy" },
    { id: 7, name: "GC Darunia" },
    { id: 8, name: "Gerudo F." },
    { id: 9, name: "Gerudo V." },
    { id: 10, name: "GY Nocturne" },
    { id: 11, name: "SFM Minuet" },
    { id: 12, name: "Zora R." },
    { id: 13, name: "Zora D." },
    { id: 14, name: "Zora F." },
  ],
  setSpawn: (id, value) =>
    set((state) =>
      produce(state, (draft) => {
        let element = draft["spawns"].find((el) => el.id === id);
        if (element) {
          element.location = value;
        }
      })
    ),
}));
