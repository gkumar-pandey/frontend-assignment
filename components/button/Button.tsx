import { FC, useState } from "react";

import { MdOutlineTune, MdDarkMode } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdSunny } from "react-icons/io";

import { PrimaryBtnProps } from "./buttonType";
import { DisplayBtnDropDown } from "../dropdown/Dropdown";

export const DisplayButton = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <>
      <button
        onClick={(e) => setShowDropDown(!showDropDown)}
        className="flex items-center border border-gray-300 rounded px-2   shadow "
      >
        <MdOutlineTune />
        <span className="px-2">Display</span>
        <span>
          <IoIosArrowDown />
        </span>
      </button>
      {showDropDown && <DisplayBtnDropDown />}
    </>
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
    <div className="border rounded px-2 flex items-center justify-between w-2/5 ">
      {children}
      <IoIosArrowDown />
    </div>
  );
};
