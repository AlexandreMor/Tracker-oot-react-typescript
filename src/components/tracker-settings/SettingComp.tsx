import React from "react";
import { Setting } from "../../stores/settingsState";
import { Option } from "./Option";

type Props = {
  setting: Setting;
};

export const SettingComp = ({ setting }: Props) => {
  return (
    <li className="w-full">
      <h3 className="py-1 px-1 text-center">{setting.name}</h3>
      <ul className="w-full flex justify-center text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-blue-900 dark:border-blue-900 dark:text-white">
        {setting.datasComponent.map((data) => {
          return <Option key={data.html} data={data} setting={setting} />;
        })}
      </ul>
    </li>
  );
};
