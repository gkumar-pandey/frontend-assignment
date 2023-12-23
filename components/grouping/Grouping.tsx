import { FC } from "react";
import { GroupingTitleProps } from "./grouping.type";
import { IoMdAdd } from "react-icons/io";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useStore } from "@/store/store";
import {
  PRIORITY,
  STATUS,
  USER,
  priorityGrouping,
  statusGrouping,
} from "@/utils/staticData";
import Image from "next/image";
import { Avatar } from "../avatar/Avatar";
import { Card } from "../card/Card";

export const GridItems = () => {
  return (
    <>
      <TicketGrouping />
    </>
  );
};

const TicketGrouping = () => {
  const {
    storeData: {
      filter: { groupingBy },
    },
  } = useStore((state) => state);

  if (groupingBy === STATUS) {
    return <TicketGroupingByStatus />;
  } else if (groupingBy === PRIORITY) {
    return <TicketGroupingByPriority />;
  } else if (groupingBy === USER) {
    return <TicketGroupingByUsers />;
  }
};

const TicketGroupingByStatus = () => {
  const {
    storeData: { tickets },
  } = useStore((state) => state);

  return statusGrouping.map((ele, idx) => (
    <div>
      <div key={idx} className="flex items-center h-[8vh] ">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <Image src={ele.icon} alt={`${ele.title} svg icon`} />
            <span className=" font-semibold">{ele.title}</span>
          </div>
          <div className="flex items-center justify-between text-gray-600 ">
            <IoMdAdd />
            <HiOutlineDotsHorizontal />
          </div>
        </div>
      </div>
      <div>
        {tickets?.map((ticket, idx) => {
          if (
            ticket.status.toLocaleLowerCase() === ele.title.toLocaleLowerCase()
          ) {
            return <Card {...ticket} />;
          }
        })}
      </div>
    </div>
  ));
};

const TicketGroupingByPriority = () => {
  const {
    storeData: { tickets },
  } = useStore((state) => state);
  return priorityGrouping.map((ele, idx) => (
    <div>
      <div key={idx} className="flex items-center h-[8vh] ">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <Image src={ele.icon} alt={`${ele.title} svg icon`} />
            <span className=" font-semibold">{ele.title}</span>
          </div>
          <div className="flex items-center justify-between text-gray-600 ">
            <IoMdAdd />
            <HiOutlineDotsHorizontal />
          </div>
        </div>
      </div>
      <div>
        {tickets.map((ticket, idx) => {
          if (ticket.priority === ele.priorityLevel) {
            return <Card {...ticket} />;
          }
        })}
      </div>
    </div>
  ));
};

const TicketGroupingByUsers = () => {
  const {
    storeData: { users, tickets },
  } = useStore((state) => state);
  const usersGrouping = users.map((ele, idx) => ({
    avatar: <Avatar userName={ele.name} />,
    name: ele.name,
    userId: ele.id,
  }));

  return usersGrouping.map((ele, idx) => (
    <div>
      <div key={idx} className="flex items-center h-[8vh] ">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            {ele.avatar}
            <span className=" font-semibold">{ele.name}</span>
          </div>
          <div className="flex items-center justify-between text-gray-600 ">
            <IoMdAdd />
            <HiOutlineDotsHorizontal />
          </div>
        </div>
      </div>
      <div>
        {tickets.map((ticket, idx) => {
          if (ticket.userId === ele.userId) {
            return <Card {...ticket} />;
          }
        })}
      </div>
    </div>
  ));
};
