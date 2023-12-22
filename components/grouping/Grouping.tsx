import { FC } from "react";
import { GroupingTitleProps } from "./grouping.type";
import { IoMdAdd } from "react-icons/io";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

export const GroupingTitle: FC<GroupingTitleProps> = ({ icon, title }) => {
  return (
    <div className="flex items-center justify-between h-[8vh] ">
      <div>
        <span>{icon}</span>
        <span className=" font-semibold ">{title}</span>
      </div>
      <div className="flex items-center justify-between text-gray-600 ">
        <IoMdAdd />
        <HiOutlineDotsHorizontal />
      </div>
    </div>
  );
};
