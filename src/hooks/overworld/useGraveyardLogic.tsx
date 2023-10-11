import { useEffect } from "react";
import { useItems } from "../useItems";
import { useAreasStore } from "../../stores/areasState";
import { useAccess } from "../useAccess";

export const useGraveyardLogic = () => {
    const { zelda, hasFire, sun } = useItems();
    const {canBuyBeans} = useAccess();

    const handleCheckReachable = useAreasStore(
      (state) => state.handleCheckReachable
    );
  
    // Sun Song
    useEffect(() => {
      handleCheckReachable(10, 0, "overworld", zelda);
    }, [zelda, handleCheckReachable]);

    // Item box
    useEffect(() => {
        handleCheckReachable(10, 3, "overworld", canBuyBeans());
      }, [canBuyBeans, handleCheckReachable]);

      // Playing Sun Song
    useEffect(() => {
        handleCheckReachable(10, 6, "overworld", sun);
      }, [sun, handleCheckReachable]);

      // Torches in Royal family tomb
    useEffect(() => {
        handleCheckReachable(10, 7, "overworld", zelda && hasFire);
      }, [zelda,hasFire, handleCheckReachable]);
}
