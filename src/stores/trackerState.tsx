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

export type Element = Pick<Temple, 'id' | 'name' | 'image' | 'inPossession' | 'limit'>;

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

export const useTrackerStore = create<TrackerState>((set) => ({
  items: [
    {
      id: 0,
      name: "Hookshot",
      image: [
        `./src/assets/items/hookshot.png`,
        `./src/assets/items/longshot.png`,
      ],
      inPossession: 0,
      limit: 2,
    },
    {
      id: 1,
      name: "Bow",
      image: [`./src/assets/items/bow.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 2,
      name: "Fire arrows",
      image: [`./src/assets/items/fire_arrows.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 3,
      name: "Ice arrows",
      image: [`./src/assets/items/ice_arrows.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 4,
      name: "Light arrows",
      image: [`./src/assets/items/light_arrows.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 5,
      name: "Ocarina",
      image: [
        `./src/assets/items/ocarina.png`,
        `./src/assets/items/ocarina_2.png`,
      ],
      inPossession: 0,
      limit: 2,
    },
    {
      id: 6,
      name: "Lens of truth",
      image: [`./src/assets/items/lens.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 7,
      name: "Dins",
      image: [`./src/assets/items/dins_fire.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 8,
      name: "Farore's Wind",
      image: [`./src/assets/items/farores_wind.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 9,
      name: "Slingshot",
      image: [`./src/assets/items/slingshot.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 10,
      name: "Boomerang",
      image: [`./src/assets/items/boomerang.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 11,
      name: "Hammer",
      image: [`./src/assets/items/hammer.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 12,
      name: "Bomb bag",
      image: [`./src/assets/items/bomb.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 13,
      name: "Bomb chu",
      image: [`./src/assets/items/chu.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 14,
      name: "Bottle",
      image: [`./src/assets/items/bottle.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 15,
      name: "Big Poe",
      image: [`./src/assets/items/big_poe.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 16,
      name: "Ruto's Letter",
      image: [`./src/assets/items/rutos_letter.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 17,
      name: "Prescription",
      image: [
        `./src/assets/items/prescription.png`,
        `./src/assets/items/eyeball_frog.png`,
        `./src/assets/items/eyedrops.png`,
        `./src/assets/items/claim_check.png`,
      ],
      inPossession: 0,
      limit: 4,
    },
    {
      id: 18,
      name: "Keaton Mask",
      image: [
        `./src/assets/items/keaton_mask.png`,
        `./src/assets/items/skull_mask.png`,
      ],
      inPossession: 0,
      limit: 2,
    },
    {
      id: 19,
      name: "Strength",
      image: [
        `./src/assets/items/goron_bracelet.png`,
        `./src/assets/items/silver_gauntlets.png`,
        `./src/assets/items/golden_gauntlets.png`,
      ],
      inPossession: 0,
      limit: 3,
    },
    {
      id: 20,
      name: "Mirror Shield",
      image: [`./src/assets/items/mirror_shield.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 21,
      name: "Magic meter",
      image: [`./src/assets/items/magic.png`, `./src/assets/items/magic_2.png`],
      inPossession: 0,
      limit: 2,
    },
    {
      id: 22,
      name: "Wallet",
      image: [
        `./src/assets/items/adults_wallet.png`,
        `./src/assets/items/giants_wallet.png`,
      ],
      inPossession: 0,
      limit: 2,
    },
    {
      id: 23,
      name: "Gerudo card",
      image: [`./src/assets/items/gerudo_card.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 24,
      name: "Kokiri's sword",
      image: [`./src/assets/items/kokiri_sword.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 25,
      name: "Scale",
      image: [
        `./src/assets/items/silver_scale.png`,
        `./src/assets/items/golden_scale.png`,
      ],
      inPossession: 0,
      limit: 2,
    },
    {
      id: 26,
      name: "Goron Tunic",
      image: [`./src/assets/items/goron_tunic.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 27,
      name: "Zora Tunic",
      image: [`./src/assets/items/zora_tunic.png`],
      inPossession: 0,
      limit: 1,
    },

    {
      id: 28,
      name: "Iron boots",
      image: [`./src/assets/items/iron_boots.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 29,
      name: "Hover boots",
      image: [`./src/assets/items/hover_boots.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 30,
      name: "Skull Token",
      image: [`./src/assets/items/skull_token.png`],
      inPossession: 0,
      limit: 100,
    },
    {
      id: 31,
      name: "junk",
      image: [`./src/assets/items/sold_out.png`],
      inPossession: 0,
      limit: 0,
    },
    {
      id: 32,
      name: "small key",
      image: [`./src/assets/items/small_key.png`],
      inPossession: 0,
      limit: 0,
    },
    {
      id: 33,
      name: "boss key",
      image: [`./src/assets/items/boss_key.png`],
      inPossession: 0,
      limit: 0,
    },
    {
      id: 34,
      name: "cancel",
      image: [`./src/assets/items/cross.png`],
      inPossession: 0,
      limit: 0,
    },
  ],
  songs: [
    {
      id: 0,
      name: "Zelda's Lullaby",
      image: [`./src/assets/items/lullaby.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 1,
      name: "Epona",
      image: [`./src/assets/items/eponas.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 2,
      name: "Saria",
      image: [`./src/assets/items/sarias.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 3,
      name: "Sun Song",
      image: [`./src/assets/items/suns_song.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 4,
      name: "Song of Time",
      image: [`./src/assets/items/time.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 5,
      name: "Song of Storms",
      image: [`./src/assets/items/storms.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 6,
      name: "Minuet",
      image: [`./src/assets/items/minuet.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 7,
      name: "Boléro",
      image: [`./src/assets/items/bolero.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 8,
      name: "Sérénade",
      image: [`./src/assets/items/serenade.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 9,
      name: "Requiem",
      image: [`./src/assets/items/requiem.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 10,
      name: "Nocturne",
      image: [`./src/assets/items/nocturne.png`],
      inPossession: 0,
      limit: 1,
    },
    {
      id: 11,
      name: "Prélude",
      image: [`./src/assets/items/prelude.png`],
      inPossession: 0,
      limit: 1,
    },
  ],
  dungeons: [
    {
      id: 0,
      name: "Kokiri Emerald",
      image: [`./src/assets/items/emerald.png`],
      inPossession: 0,
      limit: 1,
      dungeonNames: dungeonsList,
      clickCount: 0,
    },
    {
      id: 1,
      name: "Goron Ruby",
      image: [`./src/assets/items/ruby.png`],
      inPossession: 0,
      limit: 1,
      dungeonNames: dungeonsList,
      clickCount: 0,
    },
    {
      id: 2,
      name: "Zora Sapphire",
      image: [`./src/assets/items/sapphire.png`],
      inPossession: 0,
      limit: 1,
      dungeonNames: dungeonsList,
      clickCount: 0,
    },
    {
      id: 3,
      name: "Forest medallion",
      image: [`./src/assets/items/forest.png`],
      inPossession: 0,
      limit: 1,
      dungeonNames: dungeonsList,
      clickCount: 0,
    },
    {
      id: 4,
      name: "Fire medallion",
      image: [`./src/assets/items/fire.png`],
      inPossession: 0,
      limit: 1,
      dungeonNames: dungeonsList,
      clickCount: 0,
    },
    {
      id: 5,
      name: "Water medallion",
      image: [`./src/assets/items/water.png`],
      inPossession: 0,
      limit: 1,
      dungeonNames: dungeonsList,
      clickCount: 0,
    },
    {
      id: 6,
      name: "Shadow medallion",
      image: [`./src/assets/items/shadow.png`],
      inPossession: 0,
      limit: 1,
      dungeonNames: dungeonsList,
      clickCount: 0,
    },
    {
      id: 7,
      name: "Spirit medallion",
      image: [`./src/assets/items/spirit.png`],
      inPossession: 0,
      limit: 1,
      dungeonNames: dungeonsList,
      clickCount: 0,
    },
    {
      id: 8,
      name: "Light medallion",
      image: [`./src/assets/items/light.png`],
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
