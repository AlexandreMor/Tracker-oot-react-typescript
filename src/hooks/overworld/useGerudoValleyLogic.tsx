import { useEffect } from "react";
import { useItems } from "../useItems";
import { useAreasStore } from "../../stores/areasState";
import { useAccess } from "../useAccess";


export const useGerudoValleyLogic = () => {
  const { epona, hammer, storm } = useItems();
  const { gerudoValleyBridgeAccess } = useAccess();

  const handleCheckReachable = useAreasStore(
    (state) => state.handleCheckReachable
  );

  // Cow
  useEffect(() => {
    handleCheckReachable(18, 2, "overworld", epona);
  }, [handleCheckReachable, epona]);

  // Rocks
  useEffect(() => {
    handleCheckReachable(
      18,
      3,
      "overworld",
      gerudoValleyBridgeAccess() && hammer
    );
  }, [handleCheckReachable, gerudoValleyBridgeAccess, hammer]);

    // Rocks
    useEffect(() => {
        const scrubs = gerudoValleyBridgeAccess() && storm
        handleCheckReachable(
          18,
          4,
          "overworld",
          scrubs
        );
        handleCheckReachable(
            18,
            5,
            "overworld",
            scrubs
          );
      }, [handleCheckReachable, gerudoValleyBridgeAccess, storm]);
};
