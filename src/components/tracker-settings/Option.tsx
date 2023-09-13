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
        className="w-4 h-4 text-blue-600 bg-blue-100 border-blue-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-700 dark:focus:ring-offset-blue-700 focus:ring-2 dark:bg-blue-600 dark:border-blue-500"
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
