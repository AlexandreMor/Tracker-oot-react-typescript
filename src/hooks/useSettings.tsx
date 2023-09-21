import { useSettingsStore } from "../stores/settingsState";

export const useSettings = () => {
  const settings = useSettingsStore((state) => state.settings);

  const settingSelected = (id: number): string => {
    if (settings.find((setting) => setting.id === id)) {
      return settings[id].value;
    }
    return "Setting Not found";
  };

  const multiworldSetting = settingSelected(0);
  const dekuSetting = settingSelected(1);
  const fountainSetting = settingSelected(2);
  const fortressSetting = settingSelected(3);
  const shopSanitySetting = settingSelected(4);
  const skullSanitySetting = settingSelected(5);
  const scrubSanitySetting = settingSelected(6);
  const cowSanitySetting = settingSelected(7);
  const dungeonsShuffleSetting = settingSelected(8);
  const bridgeSetting = settingSelected(9);
  const shuffleMerchantsSetting = settingSelected(10);
  const keysySetting = settingSelected(11);
  const bossKeysSetting = settingSelected(12);

  return {
    multiworldSetting,
    dekuSetting,
    fountainSetting,
    fortressSetting,
    shopSanitySetting,
    skullSanitySetting,
    scrubSanitySetting,
    cowSanitySetting,
    dungeonsShuffleSetting,
    bridgeSetting,
    shuffleMerchantsSetting,
    keysySetting,
    bossKeysSetting,
  };
};
