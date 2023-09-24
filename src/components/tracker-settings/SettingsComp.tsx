import React from "react";
import { useSettingsStore } from "../../stores/settingsState";
import { SettingComp } from "./SettingComp";

export const SettingsComp = () => {
  const settings = useSettingsStore((set) => set.settings);
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="my-5 font-semibold text-3xl text-gray-900 dark:text-white">
        Settings
      </h1>
      <ul className="w-2/5 font-semibold flex flex-col items-center text-base text-gray-900 border border-gray-200 rounded-lg sm:flex bg-zinc-900 dark:text-white">
        {settings.map((setting) => (
          <SettingComp key={setting.id} setting={setting} />
        ))}
      </ul>
    </div>
  );
};
