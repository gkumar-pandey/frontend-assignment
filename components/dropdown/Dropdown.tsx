import { FC } from "react";
import { PrimaryButton } from "../button/Button";
import { DropDownMenuItemsProps } from "./dorpdown.type";
import { groupingMenuItems, orderingMenuItems } from "@/utils/staticData";
import { useStore } from "@/store/store";

export const DisplayBtnDropDown = () => {
  return (
    <div className="absolute border border-gray-500 left-8 top-16 py-4 px-6 w-72 z-10 card-box-shadow rounded bg-white dark:bg-[color:var(--secondary-bg-dark-color)] ">
      <DispalyBtnDropDownMenu />
    </div>
  );
};

// Display button drop down menu

export const DispalyBtnDropDownMenu = () => {
  const {
    setGrouping,
    setOrdering,
    storeData: { filter },
  } = useStore((state) => state);
  const onSelectGrouping = (value: string) => {
    setGrouping(value);
  };
  const onSelectOrdering = (value: string) => {
    setOrdering(value);
  };
  return (
    <div>
      <DropDownMenuItems
        text="Grouping"
        menuItems={groupingMenuItems}
        onSelect={onSelectGrouping}
        currSelectedValue={filter.groupingBy}
      />
      <DropDownMenuItems
        text="Ordering"
        menuItems={orderingMenuItems}
        onSelect={onSelectOrdering}
        currSelectedValue={filter.orderingBy}
      />
    </div>
  );
};

const DropDownMenuItems: FC<DropDownMenuItemsProps> = ({
  text,
  menuItems,
  onSelect,
  currSelectedValue,
}) => {
  return (
    <div className="flex items-center justify-between py-1">
      <span className="text-gray-500">{text}</span>
      <select
        onChange={(e) => onSelect(e.target.value)}
        value={currSelectedValue}
        className="border border-gray-300 bg-white dark:text-white dark:bg-gray-900 focus:outline-none rounded cursor-pointer "
      >
        {menuItems?.map((ele, idx) => (
          <option value={ele.value} key={idx}>
            {ele.text}
          </option>
        ))}
      </select>
    </div>
  );
};
