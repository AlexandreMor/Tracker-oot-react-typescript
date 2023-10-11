import { useEffect } from "react";
import { useItems } from "../useItems";
import { useAreasStore } from "../../stores/areasState";
import { useAccessDungeons } from "../useAccessDungeons";

export const useJabuLogic = () => {
  const { explosive, boomerang, slingshot } = useItems();

  const handleCheckReachable = useAreasStore(
    (state) => state.handleCheckReachable
  );

  const jabuEntrance = String(
    useAreasStore((state) => state.dungeons[2].entrance)
  );

  const enterJabu = useAccessDungeons(jabuEntrance);

  // Skull Stingers, Scrub, Boomerang chest
  useEffect(() => {
    const checksLogic = enterJabu && (explosive || boomerang || slingshot);
    for (let i = 0; i < 3; i++) {
      handleCheckReachable(2, i, "dungeons", checksLogic);
    }
  }, [handleCheckReachable, enterJabu, explosive, boomerang, slingshot]);

  // Map, Compass, Skull basement 1 & 2, Skull before Barinade, Barinade
  useEffect(() => {
    for (let i = 3; i < 9; i++) {
      handleCheckReachable(2, i, "dungeons", enterJabu && boomerang);
    }
  }, [enterJabu, boomerang, handleCheckReachable]);
};
