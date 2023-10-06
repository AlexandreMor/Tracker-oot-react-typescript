import { useEffect } from "react";
import { useItems } from "../useItems";
import { useAreasStore } from "../../stores/areasState";
import { useAccess } from "../useAccess";

export const useLostWoods = () => {
  const { saria, slingshot, ocarina, explosive } = useItems();

  const handleCheckReachable = useAreasStore(
    (state) => state.handleCheckReachable
  );

  const { grottosAfterMidoInAdult } = useAccess();

  useEffect(() => {
    handleCheckReachable(1, 0, "overworld", saria);
  }, [saria, handleCheckReachable]);

  useEffect(() => {
    handleCheckReachable(1, 2, "overworld", slingshot);
  }, [slingshot, handleCheckReachable]);

  useEffect(() => {
    handleCheckReachable(1, 3, "overworld", ocarina);
  }, [ocarina, handleCheckReachable]);

  useEffect(() => {
    handleCheckReachable(1, 4, "overworld", explosive);
  }, [explosive, handleCheckReachable]);

  useEffect(() => {
    let reachable = explosive || grottosAfterMidoInAdult;
    handleCheckReachable(
      1,
      8,
      "overworld",
      explosive || grottosAfterMidoInAdult()
    );
    handleCheckReachable(1, 9, "overworld", explosive);
  }, [explosive, grottosAfterMidoInAdult, handleCheckReachable]);
};
