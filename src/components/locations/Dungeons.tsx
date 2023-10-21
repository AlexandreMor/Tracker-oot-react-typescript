import React, { useEffect } from "react";
import { Zone } from "./Zone";
import { useAreasStore } from "../../stores/areasState";
import { useSettings } from "../../hooks/useSettings";

type Props = {
  areasClass: string;
};

export const Dungeons = ({ areasClass }: Props) => {
  const dungeons = useAreasStore((set) => set.dungeons);
  const { keysySetting, bossKeysSetting } = useSettings();
  const handleKeysy = useAreasStore((state) => state.handleKeysy);
  //Handle Keysy settings
  useEffect(() => {
    dungeons.map((dungeon) => {
      handleKeysy(dungeon.id, "small key", keysySetting === "yes");
      handleKeysy(dungeon.id, "boss key", bossKeysSetting === "yes");
    });
  }, [handleKeysy, keysySetting, bossKeysSetting]);
  return (
    <div className={areasClass}>
      {dungeons.map((dungeon) => {
        return <Zone area={dungeon} key={dungeon.name} category="dungeons" />;
      })}
    </div>
  );
};
