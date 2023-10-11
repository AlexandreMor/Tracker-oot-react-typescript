import { create } from "zustand";
import { produce } from "immer";

export type Temple = {
  id: number;
  name: string;
  image: Array<string>;
  inPossession: number;
  limit: number;
  dungeonNames: Array<string>;
  clickCount: number;
};

export type Element = Pick<
  Temple,
  "id" | "name" | "image" | "inPossession" | "limit"
>;

const dungeonsList: Array<string> = [
  "???",
  "Deku",
  "DC",
  "Jabu",
  "Frst",
  "Fire",
  "Wtr",
  "Shdw",
  "Sprt",
];

export type TrackerState = {
  items: Array<Element>;
  songs: Array<Element>;
  dungeons: Array<Temple>;
  increment: (id: number, category: "items" | "songs" | "dungeons") => void;
  decrement: (id: number, category: "items" | "songs" | "dungeons") => void;
  changeDungeonNameOnClick: (id: number) => void;
  changeDungeonNameOnContextMenu: (id: number) => void;
};

const url="/images"

export const useTrackerStore = create<TrackerState>((set) => ({
  items: [
    {
      id: 0,
      name: "Hookshot",
      image: [
        `${url}/hookshot.png`,
        `${url}/longshot.png`,
      ],
      inPossession: 0,
      limit: 2,
    },
    {
      id: 1,
      name: "Bow",
      image: [`${url}/bow.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 2,
      name: "Fire arrows",
      image: [`${url}/fire_arrows.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 3,
      name: "Ice arrows",
      image: [`${url}/ice_arrows.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 4,
      name: "Light arrows",
      image: [`${url}/light_arrows.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 5,
      name: "Ocarina",
      image: [
        `${url}/ocarina.png`,
        `${url}/ocarina_2.png`,
      ],
      inPossession: 0,
      limit: 2,
    },
    {
      id: 6,
      name: "Lens of truth",
      image: [`${url}/lens.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 7,
      name: "Dins",
      image: [`${url}/dins_fire.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 8,
      name: "Farore's Wind",
      image: [`${url}/farores_wind.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 9,
      name: "Slingshot",
      image: [`${url}/slingshot.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 10,
      name: "Boomerang",
      image: [`${url}/boomerang.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 11,
      name: "Hammer",
      image: [`${url}/hammer.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 12,
      name: "Bomb bag",
      image: [`${url}/bomb.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 13,
      name: "Bomb chu",
      image: [`${url}/chu.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 14,
      name: "Bottle",
      image: [`${url}/bottle.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 15,
      name: "Big Poe",
      image: [`${url}/big_poe.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 16,
      name: "Ruto's Letter",
      image: [`${url}/rutos_letter.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 17,
      name: "Prescription",
      image: [
        `${url}/prescription.png`,
        `${url}/eyeball_frog.png`,
        `${url}/eyedrops.png`,
        `${url}/claim_check.png`,
      ],
      inPossession: 0,
      limit: 4,
    },
    {
      id: 18,
      name: "Keaton Mask",
      image: [
        `${url}/keaton_mask.png`,
        `${url}/skull_mask.png`,
      ],
      inPossession: 0,
      limit: 2,
    },
    {
      id: 19,
      name: "Strength",
      image: [
        `${url}/goron_bracelet.png`,
        `${url}/silver_gauntlets.png`,
        `${url}/golden_gauntlets.png`,
      ],
      inPossession: 0,
      limit: 3,
    },
    {
      id: 20,
      name: "Mirror Shield",
      image: [`${url}/mirror_shield.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 21,
      name: "Magic meter",
      image: [`${url}/magic.png`, `${url}/magic_2.png`],
      inPossession: 0,
      limit: 2,
    },
    {
      id: 22,
      name: "Wallet",
      image: [
        `${url}/adults_wallet.png`,
        `${url}/giants_wallet.png`,
      ],
      inPossession: 0,
      limit: 2,
    },
    {
      id: 23,
      name: "Gerudo card",
      image: [`${url}/gerudo_card.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 24,
      name: "Kokiri's sword",
      image: [`${url}/kokiri_sword.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 25,
      name: "Scale",
      image: [
        `${url}/silver_scale.png`,
        `${url}/golden_scale.png`,
      ],
      inPossession: 0,
      limit: 2,
    },
    {
      id: 26,
      name: "Goron Tunic",
      image: [`${url}/goron_tunic.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 27,
      name: "Zora Tunic",
      image: [`${url}/zora_tunic.png`],
      inPossession: 0,
      limit: 1,
    },

    {
      id: 28,
      name: "Iron boots",
      image: [`${url}/iron_boots.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 29,
      name: "Hover boots",
      image: [`${url}/hover_boots.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 30,
      name: "Skull Token",
      image: [`${url}/skull_token.png`],
      inPossession: 0,
      limit: 100,
    },
    {
      id: 31,
      name: "junk",
      image: [`${url}/sold_out.png`],
      inPossession: 0,
      limit: 0,
    },
    {
      id: 32,
      name: "small key",
      image: [`${url}/small_key.png`],
      inPossession: 0,
      limit: 0,
    },
    {
      id: 33,
      name: "boss key",
      image: [`${url}/boss_key.png`],
      inPossession: 0,
      limit: 0,
    },
    {
      id: 34,
      name: "cancel",
      image: [`${url}/cross.png`],
      inPossession: 0,
      limit: 0,
    },
  ],
  songs: [
    {
      id: 0,
      name: "Zelda's Lullaby",
      image: [`${url}/lullaby.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 1,
      name: "Epona",
      image: [`${url}/eponas.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 2,
      name: "Saria",
      image: [`${url}/sarias.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 3,
      name: "Sun Song",
      image: [`${url}/suns_song.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 4,
      name: "Song of Time",
      image: [`${url}/time.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 5,
      name: "Song of Storms",
      image: [`${url}/storms.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 6,
      name: "Minuet",
      image: [`${url}/minuet.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 7,
      name: "Boléro",
      image: [`${url}/bolero.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 8,
      name: "Sérénade",
      image: [`${url}/serenade.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 9,
      name: "Requiem",
      image: [`${url}/requiem.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 10,
      name: "Nocturne",
      image: [`${url}/nocturne.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 11,
      name: "Prélude",
      image: [`${url}/prelude.png`],
      inPossession: 0,
      limit: 1,
    },
  ],
  dungeons: [
    {
      id: 0,
      name: "Kokiri Emerald",
      image: [`${url}/emerald.png`],
      inPossession: 0,
      limit: 1,
      dungeonNames: dungeonsList,
      clickCount: 0,
    },
    {
      id: 1,
      name: "Goron Ruby",
      image: [`${url}/ruby.png`],
      inPossession: 0,
      limit: 1,
      dungeonNames: dungeonsList,
      clickCount: 0,
    },
    {
      id: 2,
      name: "Zora Sapphire",
      image: [`${url}/sapphire.png`],
      inPossession: 0,
      limit: 1,
      dungeonNames: dungeonsList,
      clickCount: 0,
    },
    {
      id: 3,
      name: "Forest medallion",
      image: [`${url}/forest.png`],
      inPossession: 0,
      limit: 1,
      dungeonNames: dungeonsList,
      clickCount: 0,
    },
    {
      id: 4,
      name: "Fire medallion",
      image: [`${url}/fire.png`],
      inPossession: 0,
      limit: 1,
      dungeonNames: dungeonsList,
      clickCount: 0,
    },
    {
      id: 5,
      name: "Water medallion",
      image: [`${url}/water.png`],
      inPossession: 0,
      limit: 1,
      dungeonNames: dungeonsList,
      clickCount: 0,
    },
    {
      id: 6,
      name: "Shadow medallion",
      image: [`${url}/shadow.png`],
      inPossession: 0,
      limit: 1,
      dungeonNames: dungeonsList,
      clickCount: 0,
    },
    {
      id: 7,
      name: "Spirit medallion",
      image: [`${url}/spirit.png`],
      inPossession: 0,
      limit: 1,
      dungeonNames: dungeonsList,
      clickCount: 0,
    },
    {
      id: 8,
      name: "Light medallion",
      image: [`${url}/light.png`],
      inPossession: 0,
      limit: 1,
      dungeonNames: dungeonsList,
      clickCount: 0,
    },
  ],
  increment: (id, category) =>
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
  decrement: (id, category) =>
    set((state) =>
      produce(state, (draft) => {
        let element = draft[category].find((el) => el.id === id);
        if (element && element.inPossession > 0) {
          element.inPossession -= 1;
        }
      })
    ),
  changeDungeonNameOnClick: (id) =>
    set((state) =>
      produce(state, (draft) => {
        let element = draft["dungeons"].find((el) => el.id === id);
        if (element) {
          if (element.clickCount !== undefined) {
            if (element && element.clickCount <= 8) {
              element.clickCount += 1;
            }
            if (element && element.clickCount > 8) {
              element.clickCount = 0;
            }
          }
        }
      })
    ),
  changeDungeonNameOnContextMenu: (id) =>
    set((state) =>
      produce(state, (draft) => {
        let element = draft["dungeons"].find((el) => el.id === id);
        if (element) {
          if (element.clickCount !== undefined) {
            if (element && element.clickCount >= 0) {
              element.clickCount -= 1;
            }
            if (element && element.clickCount < 0) {
              element.clickCount = 8;
            }
          }
        }
      })
    ),
}));
