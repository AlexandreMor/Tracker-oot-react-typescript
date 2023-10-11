import { useEffect } from "react";
import { useItems } from "../useItems";
import { useAreasStore } from "../../stores/areasState";
import { useAccessDungeons } from "../useAccessDungeons";

export const useDekuLogic = () => {
  const { explosive, boomerang, slingshot } = useItems();

  const handleCheckReachable = useAreasStore(
    (state) => state.handleCheckReachable
  );

  const dekuEntrance = String(
    useAreasStore((state) => state.dungeons[0].entrance)
  );

  const enterDeku = useAccessDungeons(dekuEntrance);

  // All checks until Back Skull
  useEffect(() => {
    for (let i = 0; i < 9; i++) {
      handleCheckReachable(0, i, "dungeons", enterDeku);
    }
  }, [handleCheckReachable, enterDeku]);

  // Back Skull
  useEffect(() => {
    handleCheckReachable(0, 9, "dungeons", enterDeku && boomerang && explosive);
  }, [enterDeku, boomerang, handleCheckReachable, explosive]);

  // Gohma
  useEffect(() => {
    handleCheckReachable(0, 10, "dungeons", enterDeku && slingshot);
  }, [enterDeku, slingshot, handleCheckReachable]);
};
