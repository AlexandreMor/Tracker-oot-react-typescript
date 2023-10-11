import { useEffect } from "react";
import { useItems } from "../useItems";
import { useAreasStore } from "../../stores/areasState";
import { useAccess } from "../useAccess";

export const useLostWoodsLogic = () => {
  const { saria, slingshot, ocarina, explosive, hammer } = useItems();

  const handleCheckReachable = useAreasStore(
    (state) => state.handleCheckReachable
  );

  const { grottosAfterMidoInAdult } = useAccess();

  //Skull Kid
  useEffect(() => {
    handleCheckReachable(1, 0, "overworld", saria);
  }, [saria, handleCheckReachable]);

  //Target
  useEffect(() => {
    handleCheckReachable(1, 2, "overworld", slingshot);
  }, [slingshot, handleCheckReachable]);

  //Ocarina minigame
  useEffect(() => {
    handleCheckReachable(1, 3, "overworld", ocarina);
  }, [ocarina, handleCheckReachable]);

  //Grotto near Goron City
  useEffect(() => {
    handleCheckReachable(1, 4, "overworld", explosive || hammer);
  }, [explosive, hammer, handleCheckReachable]);

  //Scrubs Grotto
  useEffect(() => {
    handleCheckReachable(
      1,
      8,
      "overworld",
      explosive || grottosAfterMidoInAdult()
    );
    handleCheckReachable(1, 9, "overworld", explosive);
  }, [explosive, grottosAfterMidoInAdult, handleCheckReachable]);
};
