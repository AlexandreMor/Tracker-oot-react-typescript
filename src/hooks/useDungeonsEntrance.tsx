import { useAreasStore } from "../stores/areasState";

export const useDungeonsEntrance = () => {
  const dungeons = useAreasStore((state) => state.dungeons);

  const dekuEntrance = dungeons[0].entrance;
  const dcEntrance = dungeons[1].entrance;
  const jabuEntrance = dungeons[2].entrance;
  const forestEntrance = dungeons[3].entrance;
  const fireEntrance = dungeons[4].entrance;
  const waterEntrance = dungeons[5].entrance;
  const shadowEntrance = dungeons[6].entrance;
  const spiritEntrance = dungeons[7].entrance;
  const wellEntrance = dungeons[8].entrance;
  const iceEntrance = dungeons[9].entrance;
  const gtgEntrance = dungeons[10].entrance;

  return {
    dekuEntrance,
    dcEntrance,
    jabuEntrance,
    forestEntrance,
    fireEntrance,
    waterEntrance,
    shadowEntrance,
    spiritEntrance,
    wellEntrance,
    iceEntrance,
    gtgEntrance,
  };
};
