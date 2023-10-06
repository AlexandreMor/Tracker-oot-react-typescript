import { create } from "zustand";
import { produce } from "immer";

export type DatasComponent = {
  id: number;
  name: string;
  html: string;
  inputValue: string;
  checked: boolean;
};

export type Setting = {
  id: number;
  name: string;
  value: string;
  datasComponent: DatasComponent[];
};
export type Settings = {
  settings: Setting[];
  changeValue: (id: number, inputValue: string) => void;
};

export const useSettingsStore = create<Settings>((set) => ({
  settings: [
    {
      id: 0,
      name: "Multiworld",
      value: "no",
      datasComponent: [
        {
          id: 0,
          name: "Yes",
          html: "mw-yes",
          inputValue: "yes",
          checked: true,
        },
        {
          id: 1,
          name: "No",
          html: "mw-no",
          inputValue: "no",
          checked: false,
        },
      ],
    },
    {
      id: 1,
      name: "Deku",
      value: "closed",
      datasComponent: [
        {
          id: 0,
          name: "Opened",
          html: "deku-opened",
          inputValue: "opened",
          checked: false,
        },
        {
          id: 1,
          name: "Closed",
          html: "deku-closed",
          inputValue: "closed",
          checked: true,
        },
      ],
    },
    {
      id: 2,
      name: "Fountain",
      value: "closed",
      datasComponent: [
        {
          id: 0,
          name: "Opened",
          html: "fountain-opened",
          inputValue: "opened",
          checked: false,
        },
        {
          id: 1,
          name: "Closed",
          html: "fountain-closed",
          inputValue: "closed",
          checked: true,
        },
      ],
    },
    {
      id: 3,
      name: "Fortress",
      value: "closed",
      datasComponent: [
        {
          id: 0,
          name: "Opened",
          html: "fortress-opened",
          inputValue: "opened",
          checked: false,
        },
        {
          id: 1,
          name: "Closed",
          html: "fortress-closed",
          inputValue: "closed",
          checked: true,
        },
      ],
    },
    {
      id: 4,
      name: "Shopsanity",
      value: "no",
      datasComponent: [
        {
          id: 0,
          name: "Yes",
          html: "shop-on",
          inputValue: "yes",
          checked: false,
        },
        {
          id: 1,
          name: "No",
          html: "shop-off",
          inputValue: "no",
          checked: true,
        },
      ],
    },
    {
      id: 5,
      name: "Skullsanity dungeons",
      value: "no",
      datasComponent: [
        {
          id: 0,
          name: "Yes",
          html: "skull-on",
          inputValue: "yes",
          checked: false,
        },
        {
          id: 1,
          name: "No",
          html: "skull-off",
          inputValue: "no",
          checked: true,
        },
      ],
    },
    {
      id: 6,
      name: "Scrubsanity",
      value: "no",
      datasComponent: [
        {
          id: 0,
          name: "Yes",
          html: "scrub-on",
          inputValue: "yes",
          checked: false,
        },
        {
          id: 1,
          name: "No",
          html: "scrub-off",
          inputValue: "no",
          checked: true,
        },
      ],
    },
    {
      id: 7,
      name: "Cowsanity",
      value: "no",
      datasComponent: [
        {
          id: 0,
          name: "Yes",
          html: "cow-on",
          inputValue: "yes",
          checked: false,
        },
        {
          id: 1,
          name: "No",
          html: "cow-off",
          inputValue: "no",
          checked: true,
        },
      ],
    },
    {
      id: 8,
      name: "Dungeon Shuffle",
      value: "no",
      datasComponent: [
        {
          id: 0,
          name: "Yes",
          html: "dungeon-shuf-on",
          inputValue: "yes",
          checked: false,
        },
        {
          id: 1,
          name: "No",
          html: "dungeon-shuf-off",
          inputValue: "no",
          checked: true,
        },
      ],
    },
    {
      id: 9,
      name: "Bridge",
      value: "6",
      datasComponent: [
        {
          id: 0,
          name: "2 med",
          html: "2-med",
          inputValue: "2",
          checked: false,
        },
        {
          id: 1,
          name: "3 med",
          html: "3-med",
          inputValue: "3",
          checked: false,
        },
        {
          id: 2,
          name: "4 med",
          html: "4-med",
          inputValue: "4",
          checked: false,
        },
        {
          id: 3,
          name: "5 med",
          html: "5-med",
          inputValue: "5",
          checked: false,
        },
        {
          id: 4,
          name: "6 med",
          html: "6-med",
          inputValue: "6",
          checked: true,
        },
      ],
    },
    {
      id: 10,
      name: "Shuffle Merchants",
      value: "no",
      datasComponent: [
        {
          id: 0,
          name: "Yes",
          html: "med-carpet-on",
          inputValue: "yes",
          checked: false,
        },
        {
          id: 1,
          name: "No",
          html: "med-carpet-off",
          inputValue: "no",
          checked: true,
        },
      ],
    },
    {
      id: 11,
      name: "Keysy",
      value: "no",
      datasComponent: [
        {
          id: 0,
          name: "Yes",
          html: "keysy-on",
          inputValue: "yes",
          checked: false,
        },
        {
          id: 1,
          name: "No",
          html: "keysy-off",
          inputValue: "no",
          checked: true,
        },
      ],
    },
    {
      id: 12,
      name: "Boss Keysy",
      value: "no",
      datasComponent: [
        {
          id: 0,
          name: "Yes",
          html: "bkeysy-on",
          inputValue: "yes",
          checked: false,
        },
        {
          id: 1,
          name: "No",
          html: "bkeysy-off",
          inputValue: "no",
          checked: true,
        },
      ],
    },
  ],
  changeValue: (id, inputValue) =>
    set((state) =>
      produce(state, (draft) => {
        let element = draft["settings"].find((el) => el.id === id);
        if (element) {
          element.value = inputValue;
        }
      })
    ),
}));
