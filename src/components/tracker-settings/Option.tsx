import React from "react";
import {
  DatasComponent,
  Setting,
  useSettingsStore,
} from "../../stores/settingsState";

type Props = {
  setting: Setting;
  data: DatasComponent;
};

export const Option = ({ setting, data }: Props) => {
  const changeValue = useSettingsStore((state) => state.changeValue);

  return (
    <li className="py-4 px-2">
      <input
        id={`${data.id} + ${setting.id}`}
        type="radio"
        value={data.inputValue}
        name={`list-radio-${setting.name}`}
        className="w-4 h-4 text-zinc-600 border-zinc-300 focus:ring-zinc-500 focus:ring-offset-zinc-700 focus:ring-2 bg-zinc-600"
        checked={setting.value === data.inputValue}
        onChange={() => changeValue(setting.id, data.inputValue)}
      />
      <label
        htmlFor={`${data.id} + ${setting.id}`}
        className="w-full font-semibold py-3 ml-2 text-sm text-gray-900 dark:text-gray-300"
      >
        {data.name}
      </label>
    </li>
  );
};
