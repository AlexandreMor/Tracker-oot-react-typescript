import { create } from "zustand";
import { produce } from "immer";

export type Path = {
  id: number;
  name: string;
  locationField: string;
  location: string;
  bossField: string;
  boss: string;
  player: string;
  idArea: number;
};
export type Foolish = {
  id: number;
  name: string;
  locationField: string;
  location: string;
  idArea: number;
};
export type Always = {
  id: number;
  name: string;
  item: string;
  box: boolean;
  idArea: number;
  idCheck: number;
};
export type Sometimes = {
  id: number;
  name: string;
  checkInput: string;
  check: string;
  idArea: number;
  idCheck: number;
  box: boolean;
};
export type Hints = {
  paths: Path[];
  foolishes: Foolish[];
  always: Always[];
  sometimes: Sometimes[];
  handleChangeLocation: (id: number, category: string) => void;
};

export const useHintsStore = create<Hints>((set) => ({
  paths: [
    {
      id: 0,
      name: "Path 1",
      locationField: "",
      location: "",
      bossField: "",
      boss: "",
      player: "",
      idArea: 0,
    },
    {
      id: 1,
      name: "Path 2",
      locationField: "",
      location: "",
      bossField: "",
      boss: "",
      player: "",
      idArea: 0,
    },
    {
      id: 2,
      name: "Path 3",
      locationField: "",
      location: "",
      bossField: "",
      boss: "",
      player: "",
      idArea: 0,
    },
    {
      id: 3,
      name: "Path 4",
      locationField: "",
      location: "",
      bossField: "",
      boss: "",
      player: "",
      idArea: 0,
    },
    {
      id: 4,
      name: "Path 5",
      locationField: "",
      location: "",
      bossField: "",
      boss: "",
      player: "",
      idArea: 0,
    },
    {
      id: 5,
      name: "Path 6",
      locationField: "",
      location: "",
      bossField: "",
      boss: "",
      player: "",
      idArea: 0,
    },
    {
      id: 6,
      name: "Path 7",
      locationField: "",
      location: "",
      bossField: "",
      boss: "",
      player: "",
      idArea: 0,
    },
    {
      id: 7,
      name: "Path 8",
      locationField: "",
      location: "",
      bossField: "",
      boss: "",
      player: "",
      idArea: 0,
    },
  ],
  foolishes: [
    { id: 8, name: "Foolish 1", locationField: "", location: "", idArea: 0 },
    { id: 9, name: "Foolish 2", locationField: "", location: "", idArea: 0 },
    { id: 10, name: "Foolish 3", locationField: "", location: "", idArea: 0 },
    { id: 11, name: "Foolish 4", locationField: "", location: "", idArea: 0 },
  ],
  always: [
    {
      id: 12,
      name: "SoT",
      item: "",
      box: false,
      idArea: 5,
      idCheck: 0,
    },
    {
      id: 13,
      name: "30s",
      item: "",
      box: false,
      idArea: 13,
      idCheck: 13,
    },
    {
      id: 14,
      name: "40s",
      item: "",
      box: false,
      idArea: 13,
      idCheck: 14,
    },
    {
      id: 15,
      name: "50s",
      item: "",
      box: false,
      idArea: 13,
      idCheck: 15,
    },
    {
      id: 16,
      name: "Biggoron",
      item: "",
      box: false,
      idArea: 13,
      idCheck: 16,
    },
    {
      id: 17,
      name: "Frogs 2",
      item: "",
      box: false,
      idArea: 13,
      idCheck: 17,
    },
    {
      id: 18,
      name: "Skull Mask",
      item: "",
      box: false,
      idArea: 13,
      idCheck: 18,
    },
    {
      id: 19,
      name: "Nocturne",
      item: "",
      box: false,
      idArea: 13,
      idCheck: 19,
    },
  ],
  sometimes: [
    {
      id: 0,
      name: "Sometimes 1",
      checkInput: "",
      check: "",
      idArea: 0,
      idCheck: 0,
      box: false,
    },
    {
      id: 1,
      name: "Sometimes 2",
      checkInput: "",
      check: "",
      idArea: 0,
      idCheck: 1,
      box: false,
    },
    {
      id: 2,
      name: "Sometimes 3",
      checkInput: "",
      check: "",
      idArea: 0,
      idCheck: 2,
      box: false,
    },
    {
      id: 3,
      name: "Sometimes 4",
      checkInput: "",
      check: "",
      idArea: 0,
      idCheck: 3,
      box: false,
    },
    {
      id: 4,
      name: "Sometimes 5",
      checkInput: "",
      check: "",
      idArea: 0,
      idCheck: 4,
      box: false,
    },
    {
      id: 5,
      name: "Sometimes 6",
      checkInput: "",
      check: "",
      idArea: 0,
      idCheck: 5,
      box: false,
    },
    {
      id: 6,
      name: "Sometimes 7",
      checkInput: "",
      check: "",
      idArea: 0,
      idCheck: 6,
      box: false,
    },
    {
      id: 7,
      name: "Sometimes 8",
      checkInput: "",
      check: "",
      idArea: 0,
      idCheck: 7,
      box: false,
    },
    {
      id: 8,
      name: "Sometimes 9",
      checkInput: "",
      check: "",
      idArea: 0,
      idCheck: 8,
      box: false,
    },
    {
      id: 9,
      name: "Sometimes 10",
      checkInput: "",
      check: "",
      idArea: 0,
      idCheck: 9,
      box: false,
    },
    {
      id: 10,
      name: "Sometimes 11",
      checkInput: "",
      check: "",
      idArea: 0,
      idCheck: 10,
      box: false,
    },
  ],
  handleChangeLocation: (id, category) =>
    set((state) =>
      produce(state, (draft) => {
        let element = draft[category].find((el) => el.id === id);
        if (element) {
          if (element.inPossession < element.limit) {
            element.inPossession += 1;
          } else {
            element.inPossession = 0;
          }
        }
      })
    ),
}));

export type Bosses = Array<string>;
export const bosses: Bosses = [
  "Gohma",
  "King Dodongo",
  "Barinade",
  "Phantom Ganon",
  "Volvagia",
  "Morpha",
  "Bongo",
  "Twinrova",
];
export type Sometime = {
  id: number;
  location: string;
  short: string;
  idCheck: number;
  idArea: number;
};
export type SometimesList = Array<Sometime>;
export const sometimesList: SometimesList = [
  { id: 0, location: "Sun Song", short: "sun", idCheck: 0, idArea: 14 },
  { id: 1, location: "Minuet", short: "min", idCheck: 1, idArea: 2 },
  { id: 2, location: "Bolero", short: "bol", idCheck: 0, idArea: 19 },
  { id: 3, location: "Serenade", short: "ser", idCheck: 0, idArea: 26 },
  { id: 4, location: "Nocturne", short: "noc", idCheck: 1, idArea: 13 },
  { id: 5, location: "Requiem", short: "req", idCheck: 0, idArea: 30 },
  { id: 6, location: "Prelude", short: "pre", idCheck: 0, idArea: 10 },
  { id: 7, location: "KF Link's Cow", short: "lco", idCheck: 6, idArea: 0 },
  { id: 8, location: "LW Skull Kid", short: "kid", idCheck: 0, idArea: 1 },
  { id: 9, location: "LW Target", short: "tar", idCheck: 2, idArea: 1 },
  { id: 10, location: "LH Shooting Sun", short: "sho", idCheck: 5, idArea: 7 },
  { id: 11, location: "LH Diving", short: "div", idCheck: 4, idArea: 7 },
  { id: 12, location: "Water Boss Key", short: "wbk", idCheck: 6, idArea: 8 },
  { id: 13, location: "Water River", short: "wri", idCheck: 13, idArea: 8 },
  {
    id: 14,
    location: "Water Central Pillar ",
    short: "wpi",
    idCheck: 9,
    idArea: 8,
  },
  { id: 15, location: "Market CMG", short: "cmg", idCheck: 4, idArea: 9 },
  { id: 16, location: "Market Big Poe", short: "poe", idCheck: 5, idArea: 9 },
  { id: 17, location: "HC Great Fairy", short: "din", idCheck: 0, idArea: 11 },
  { id: 18, location: "OGC Great Fairy", short: "ogc", idCheck: 0, idArea: 12 },
  { id: 19, location: "Kak 20s", short: "20s", idCheck: 11, idArea: 13 },
  { id: 20, location: "Kak Cuccos", short: "cuc", idCheck: 2, idArea: 13 },
  {
    id: 21,
    location: "Graveyard Play Sun",
    short: "gsu",
    idCheck: 6,
    idArea: 14,
  },
  {
    id: 22,
    location: "Graveyard flames",
    short: "fla",
    idCheck: 7,
    idArea: 14,
  },
  { id: 23, location: "Shadow Pot", short: "spo", idCheck: 13, idArea: 16 },
  { id: 24, location: "GC Pot", short: "gpo", idCheck: 2, idArea: 18 },
  { id: 25, location: "GC Darunia", short: "dar", idCheck: 1, idArea: 18 },
  { id: 26, location: "GC Maze Left", short: "gch", idCheck: 6, idArea: 18 },
  { id: 27, location: "Fire Pierre", short: "pie", idCheck: 16, idArea: 21 },
  { id: 28, location: "Fire Hammer", short: "ham", idCheck: 19, idArea: 21 },
  { id: 29, location: "ZR Frogs 1", short: "fro", idCheck: 3, idArea: 22 },
  { id: 30, location: "ZD King Zora", short: "kz", idCheck: 2, idArea: 23 },
  { id: 31, location: "ZF Icy Waters", short: "icy", idCheck: 1, idArea: 24 },
  { id: 32, location: "Jabu Boomerang", short: "boo", idCheck: 0, idArea: 25 },
  {
    id: 33,
    location: "Ice Cavern Iron Boots",
    short: "ib",
    idCheck: 7,
    idArea: 26,
  },
  { id: 34, location: "GV Rocks", short: "gvh", idCheck: 3, idArea: 27 },
  { id: 35, location: "GF 1500 Pts", short: "hba", idCheck: 2, idArea: 28 },
  { id: 36, location: "Wasteland", short: "was", idCheck: 1, idArea: 29 },
  { id: 37, location: "GTG Maze Final", short: "fin", idCheck: 21, idArea: 31 },
  { id: 38, location: "GTG Toilets", short: "toi", idCheck: 15, idArea: 31 },
  {
    id: 39,
    location: "Spirit Silv. Gaunt.",
    short: "sil",
    idCheck: 9,
    idArea: 32,
  },
  {
    id: 40,
    location: "Spirit Mirror Shield",
    short: "ms",
    idCheck: 21,
    idArea: 32,
  },
  {
    id: 41,
    location: "Gan Cstl Golden Gauntlets",
    short: "gol",
    idCheck: 8,
    idArea: 33,
  },
  {
    id: 42,
    location: "Oot throwed",
    short: "oca",
    idCheck: 7,
    idArea: 5,
  },
  {
    id: 43,
    location: "Gerudo Valley Cow",
    short: "gvc",
    idCheck: 2,
    idArea: 27,
  },
  {
    id: 44,
    location: "Hyrule Field Cow",
    short: "hfc",
    idCheck: 6,
    idArea: 5,
  },
  { id: 45, location: "Water Gate Skull", short: "wsk", idCheck: 0, idArea: 8 },
];
