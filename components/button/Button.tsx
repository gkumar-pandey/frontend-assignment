import { FC } from "react";

import { MdOutlineTune, MdDarkMode } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdSunny } from "react-icons/io";

import { PrimaryBtnProps } from "./buttonType";
import { DisplayBtnDropDown } from "../dropdown/Dropdown";

export const DisplayButton = () => {
  return (
    <button className="flex items-center border border-gray-300 rounded px-2   shadow ">
      <MdOutlineTune />
      <span className="px-2">Display</span>
      <span>
        <IoIosArrowDown />
      </span>
      {/* <DisplayBtnDropDown /> */}
    </button>
  );
};

// Dark mode Button
export const DarkModeButton = () => {
  const isDark = true;
  return (
    <button className="text-xl cursor-pointer  ">
      {isDark ? <MdDarkMode /> : <IoMdSunny />}
    </button>
  );
};

// Pirmary button
export const PrimaryButton: FC<PrimaryBtnProps> = ({ children }) => {
  return (
    <button className="border rounded px-2 flex items-center justify-between w-2/5 ">
      {children}
      <IoIosArrowDown />
    </button>
  );
};