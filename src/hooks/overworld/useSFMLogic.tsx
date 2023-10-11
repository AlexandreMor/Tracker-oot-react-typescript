import { useEffect } from "react";
import { useItems } from "../useItems";
import { useAreasStore } from "../../stores/areasState";
import { useAccess } from "../useAccess";

export const useSFMLogic = () => {
  const { storm, ocarina, explosive } = useItems();

  const handleCheckReachable = useAreasStore(
    (state) => state.handleCheckReachable
  );

  const { grottosAfterMidoInAdult, minuetAccess } = useAccess();

  //Saria
  useEffect(() => {
    handleCheckReachable(2, 0, "overworld", ocarina);
  }, [ocarina, handleCheckReachable]);

  //Minuet
  useEffect(() => {
    handleCheckReachable(2, 1, "overworld", ocarina && minuetAccess());
  }, [ocarina, minuetAccess, handleCheckReachable]);

  //Wolfos Grotto
  useEffect(() => {
    handleCheckReachable(
      2,
      2,
      "overworld",
      explosive || grottosAfterMidoInAdult()
    );
  }, [explosive, grottosAfterMidoInAdult, handleCheckReachable]);

  // Scrubs
  useEffect(() => {
    handleCheckReachable(2, 3, "overworld", storm);
    handleCheckReachable(2, 4, "overworld", storm);
  }, [storm, handleCheckReachable]);
};
