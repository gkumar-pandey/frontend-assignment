import { FC, useState } from "react";

import { MdOutlineTune } from "react-icons/md";
import { IoIosArrowDown, IoMdMoon } from "react-icons/io";
import { IoMdSunny } from "react-icons/io";

import { PrimaryBtnProps } from "./buttonType";
import { DisplayBtnDropDown } from "../dropdown/Dropdown";
import { useTheme } from "@/store/useTheme";

export const DisplayButton = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <>
      <button
        onClick={(e) => setShowDropDown(!showDropDown)}
        className="flex items-center border border-gray-600 rounded px-2 shadow dark:text-white "
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
  const { isDark, toggleDark } = useTheme((state) => state);
  return (
    <button
      onClick={() => toggleDark()}
      className="text-xl cursor-pointer dark:text-white  "
    >
      {isDark ? <IoMdSunny /> : <IoMdMoon />}
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
