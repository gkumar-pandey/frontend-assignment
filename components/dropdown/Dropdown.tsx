import { FC } from "react";
import { PrimaryButton } from "../button/Button";
import { DropDownMenuItemProps } from "./dorpdown.type";

export const DisplayBtnDropDown = () => {
  return (
    <div className="absolute left-8 top-16 border shadow py-4 px-6 w-72 rounded bg-white  ">
      <DispalyBtnDropDownMenu />
    </div>
  );
};

// Display button drop down menu

export const DispalyBtnDropDownMenu = () => {
  return (
    <div>
      <DisplayBtnDropDownMenuItem text="Grouping" />
      <DisplayBtnDropDownMenuItem text="Ordering" />
    </div>
  );
};

export const DisplayBtnDropDownMenuItem: FC<DropDownMenuItemProps> = ({
  text,
  buttonMenu,
}) => {
  return (
    <div className="flex items-center justify-between py-1 ">
      <span>{text}</span>
      <PrimaryButton>Status</PrimaryButton>
    </div>
  );
};

const StatusDropDownMenu = () => {};
