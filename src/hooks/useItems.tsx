import { useTrackerStore } from "../stores/trackerState";

const useItems = () => {
  const items = useTrackerStore((set) => set.items);
  const songs = useTrackerStore((set) => set.songs);

  const itemsPossessed = (id: number, nb: number): boolean => {
    return items[id].inPossession >= nb;
  };

  const songsPossessed = (id: number, nb: number): boolean => {
    return songs[id].inPossession >= nb;
  };

  const hookshot = (): boolean => itemsPossessed(0, 1);
  const longshot = (): boolean => itemsPossessed(0, 2);
  const bow = (): boolean => itemsPossessed(1, 1);
  const fireArrow = (): boolean => itemsPossessed(2, 1);
  const iceArrow = (): boolean => itemsPossessed(3, 1);
  const lightArrow = (): boolean => itemsPossessed(4, 1);
  const ocarina = (): boolean => itemsPossessed(5, 1);
  const lens = (): boolean => itemsPossessed(6, 1);
  const dins = (): boolean => itemsPossessed(7, 1);
  const farores = (): boolean => itemsPossessed(8, 1);
  const slingshot = (): boolean => itemsPossessed(9, 1);
  const boomerang = (): boolean => itemsPossessed(10, 1);
  const hammer = (): boolean => itemsPossessed(11, 1);
  const bomb = (): boolean => itemsPossessed(12, 1);
  const chu = (): boolean => itemsPossessed(13, 1);
  const bottle = (): boolean => itemsPossessed(14, 1);
  const bigPoe = (): boolean => itemsPossessed(15, 1);
  const rutosLetter = (): boolean => itemsPossessed(16, 1);
  const prescription = (): boolean => itemsPossessed(17, 1);
  const claimCheck = (): boolean => itemsPossessed(17, 4);
  const skullMask = (): boolean => itemsPossessed(18, 2);
  const strength1 = (): boolean => itemsPossessed(19, 1);
  const strength2 = (): boolean => itemsPossessed(19, 2);
  const strength3 = (): boolean => itemsPossessed(19, 3);
  const mirrorShield = (): boolean => itemsPossessed(20, 1);
  const magic = (): boolean => itemsPossessed(21, 1);
  const adultWallet = (): boolean => itemsPossessed(22, 1);
  const giantWallet = (): boolean => itemsPossessed(22, 2);
  const gerudoCard = (): boolean => itemsPossessed(23, 1);
  const kokiriSword = (): boolean => itemsPossessed(24, 1);
  const silverScale = (): boolean => itemsPossessed(25, 1);
  const goldenScale = (): boolean => itemsPossessed(25, 2);
  const goronTunic = (): boolean => itemsPossessed(26, 1);
  const zoraTunic = (): boolean => itemsPossessed(27, 1);
  const ironBoots = (): boolean => itemsPossessed(28, 1);
  const hoverBoots = (): boolean => itemsPossessed(29, 1);

  const zelda = (): boolean => songsPossessed(0, 1);
  const epona = (): boolean => songsPossessed(1, 1);
  const saria = (): boolean => songsPossessed(2, 1);
  const sun = (): boolean => songsPossessed(3, 1);
  const time = (): boolean => songsPossessed(4, 1);
  const storm = (): boolean => songsPossessed(5, 1);
  const minuet = (): boolean => songsPossessed(6, 1);
  const bolero = (): boolean => songsPossessed(7, 1);
  const serenade = (): boolean => songsPossessed(8, 1);
  const requiem = (): boolean => songsPossessed(9, 1);
  const nocturne = (): boolean => songsPossessed(10, 1);
  const prelude = (): boolean => songsPossessed(11, 1);

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
