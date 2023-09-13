import { useSettingsStore } from "../stores/settingsState";

export const useSettings = () => {
  const settings = useSettingsStore((state) => state.settings);

  const settingSelected = (id: number): string => {
    if (settings.find((setting) => setting.id === id)) {
      return settings[id].value;
    }
    return "Setting Not found";
  };

  const dekuSetting = settingSelected(0);
  const fountainSetting = settingSelected(1);
  const fortressSetting = settingSelected(2);
  const shopSanitySetting = settingSelected(3);
  const skullSanitySetting = settingSelected(4);
  const scrubSanitySetting = settingSelected(5);
  const cowSanitySetting = settingSelected(6);
  const dungeonShuffleSetting = settingSelected(7);
  const bridgeSetting = settingSelected(8);
  const shuffleMerchantsSetting = settingSelected(9);
  const keysySetting = settingSelected(10);
  const bossKeysSetting = settingSelected(11);

  return {
    dekuSetting,
    fountainSetting,
    fortressSetting,
    shopSanitySetting,
    skullSanitySetting,
    scrubSanitySetting,
    cowSanitySetting,
    dungeonShuffleSetting,
    bridgeSetting,
    shuffleMerchantsSetting,
    keysySetting,
    bossKeysSetting,
  };
};
