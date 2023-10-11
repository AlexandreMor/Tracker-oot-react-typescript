import { useEffect } from "react";
import { useItems } from "../useItems";
import { useAreasStore } from "../../stores/areasState";

export const useHyruleFieldLogic = () => {
  const {
    ironBoots,
    goldenScale,
    ocarina,
    explosive,
    hammer,
    hasFire,
    hasFireChild,
    allStonesCompleted,
  } = useItems();

  const handleCheckReachable = useAreasStore(
    (state) => state.handleCheckReachable
  );

  //SoT
  useEffect(() => {
    handleCheckReachable(3, 0, "overworld", allStonesCompleted() && ocarina);
  }, [ocarina, handleCheckReachable, allStonesCompleted]);

  //Remote, Scrub, Boulda
  useEffect(() => {
    handleCheckReachable(3, 2, "overworld", explosive || hammer);
    handleCheckReachable(3, 3, "overworld", explosive || hammer);
    handleCheckReachable(3, 4, "overworld", explosive || hammer);
  }, [explosive, hammer, handleCheckReachable]);

  //Tektile
  useEffect(() => {
    const tektile = (explosive || hammer) && (goldenScale || ironBoots);
    handleCheckReachable(3, 5, "overworld", tektile);
  }, [
    ocarina,
    explosive,
    hammer,
    goldenScale,
    ironBoots,
    handleCheckReachable,
  ]);

  //Cow
  useEffect(() => {
    const cow = ocarina && ((hasFireChild && explosive) || (hasFire && hammer));
    handleCheckReachable(3, 6, "overworld", cow);
  }, [ocarina, handleCheckReachable, hasFire, hammer, explosive, hasFireChild]);

  //OoT
  useEffect(() => {
    handleCheckReachable(3, 7, "overworld", allStonesCompleted());
  }, [ocarina, handleCheckReachable, allStonesCompleted]);
};
