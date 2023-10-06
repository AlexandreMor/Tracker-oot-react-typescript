import { useTrackerStore } from "../stores/trackerState";

export const useItems = () => {
  const items = useTrackerStore((set) => set.items);
  const songs = useTrackerStore((set) => set.songs);

  const itemsPossessed = (id: number, nb: number): boolean => {
    return items[id].inPossession >= nb;
  };

  const songsPossessed = (id: number, nb: number): boolean => {
    return songs[id].inPossession >= nb;
  };

  const hookshot = itemsPossessed(0, 1);
  const longshot = itemsPossessed(0, 2);
  const bow = itemsPossessed(1, 1);
  const fireArrow = itemsPossessed(2, 1);
  const iceArrow = itemsPossessed(3, 1);
  const lightArrow = itemsPossessed(4, 1);
  const ocarina = itemsPossessed(5, 1);
  const lens = itemsPossessed(6, 1);
  const dins = itemsPossessed(7, 1);
  const farores = itemsPossessed(8, 1);
  const slingshot = itemsPossessed(9, 1);
  const boomerang = itemsPossessed(10, 1);
  const hammer = itemsPossessed(11, 1);
  const bomb = itemsPossessed(12, 1);
  const chu = itemsPossessed(13, 1);
  const explosive = bomb || chu
  const bottle = itemsPossessed(14, 1);
  const bigPoe = itemsPossessed(15, 1);
  const rutosLetter = itemsPossessed(16, 1);
  const prescription = itemsPossessed(17, 1);
  const claimCheck = itemsPossessed(17, 4);
  const skullMask = itemsPossessed(18, 2);
  const strength1 = itemsPossessed(19, 1);
  const strength2 = itemsPossessed(19, 2);
  const strength3 = itemsPossessed(19, 3);
  const mirrorShield = itemsPossessed(20, 1);
  const magic = itemsPossessed(21, 1);
  const adultWallet = itemsPossessed(22, 1);
  const giantWallet = itemsPossessed(22, 2);
  const gerudoCard = itemsPossessed(23, 1);
  const kokiriSword = itemsPossessed(24, 1);
  const silverScale = itemsPossessed(25, 1);
  const goldenScale = itemsPossessed(25, 2);
  const goronTunic = itemsPossessed(26, 1);
  const zoraTunic = itemsPossessed(27, 1);
  const ironBoots = itemsPossessed(28, 1);
  const hoverBoots = itemsPossessed(29, 1);

  const zelda = songsPossessed(0, 1);
  const epona = songsPossessed(1, 1);
  const saria = songsPossessed(2, 1);
  const sun = songsPossessed(3, 1);
  const time = songsPossessed(4, 1);
  const storm = songsPossessed(5, 1);
  const minuet = songsPossessed(6, 1);
  const bolero = songsPossessed(7, 1);
  const serenade = songsPossessed(8, 1);
  const requiem = songsPossessed(9, 1);
  const nocturne = songsPossessed(10, 1);
  const prelude = songsPossessed(11, 1);

  return {
    hookshot,
    longshot,
    bow,
    fireArrow,
    iceArrow,
    lightArrow,
    ocarina,
    lens,
    dins,
    farores,
    slingshot,
    boomerang,
    hammer,
    bomb,
    chu,
    explosive,
    bottle,
    bigPoe,
    rutosLetter,
    prescription,
    claimCheck,
    skullMask,
    strength1,
    strength2,
    strength3,
    mirrorShield,
    magic,
    adultWallet,
    giantWallet,
    gerudoCard,
    kokiriSword,
    silverScale,
    goldenScale,
    goronTunic,
    zoraTunic,
    ironBoots,
    hoverBoots,
    zelda,
    epona,
    saria,
    sun,
    time,
    storm,
    minuet,
    bolero,
    serenade,
    requiem,
    nocturne,
    prelude,
  };
};
