import { useEffect, useCallback } from "react";
import { useItems } from "../useItems";
import { useAreasStore } from "../../stores/areasState";
import { useAccessDungeons } from "../useAccessDungeons";
import { useAccess } from "../useAccess";

export const useIceCavernLogic = () => {
  const { hookshot, ocarina, hasBottle } = useItems();

  const handleCheckReachable = useAreasStore(
    (state) => state.handleCheckReachable
  );

  const iceCavernEntrance = String(
    useAreasStore((state) => state.dungeons[9].entrance)
  );

  const enterIceCavern = useAccessDungeons(iceCavernEntrance);
  const { canDeliverRutosLetter } = useAccess();

  const emptyBottle = canDeliverRutosLetter() || hasBottle;

  // Serenade
  useEffect(() => {
    const serenade = enterIceCavern && ocarina && emptyBottle;
    handleCheckReachable(9, 0, "dungeons", serenade);
  }, [enterIceCavern, ocarina, emptyBottle, handleCheckReachable]);

  // Skull spin
  useEffect(() => {
    handleCheckReachable(9, 1, "dungeons", enterIceCavern && hookshot);
  }, [enterIceCavern, hookshot, handleCheckReachable]);

  // Skull near blue fire, Skull block room
  useEffect(() => {
    const skulls = enterIceCavern && hookshot && emptyBottle;
    handleCheckReachable(9, 4, "dungeons", skulls);
    handleCheckReachable(9, 6, "dungeons", skulls);
  }, [enterIceCavern, emptyBottle, hookshot, handleCheckReachable]);

  // Map, Compass, Freestanding, Iron boots
  useEffect(() => {
    handleCheckReachable(9, 2, "dungeons", enterIceCavern && emptyBottle);
    for (let i = 3; i < 8; i += 2) {
      handleCheckReachable(9, i, "dungeons", enterIceCavern && emptyBottle);
    }
  }, [enterIceCavern, emptyBottle, handleCheckReachable]);
};
