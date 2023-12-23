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
import { sortTicketsByPriority } from "@/utils/utils";

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
    storeData: { tickets, filter },
  } = useStore((state) => state);

  const sortedTickets = sortTicketsByPriority(tickets, filter.orderingBy);

  return statusGrouping.map((ele, idx) => (
    <div key={idx}>
      <div className="flex items-center h-[8vh] ">
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
        {sortedTickets?.map((ticket, idx) => {
          if (
            ticket.status?.toLocaleLowerCase() === ele.title.toLocaleLowerCase()
          ) {
            return <Card key={ticket.id} {...ticket} />;
          }
        })}
      </div>
    </div>
  ));
};

const TicketGroupingByPriority = () => {
  const {
    storeData: {
      tickets,
      filter: { orderingBy },
    },
  } = useStore((state) => state);
  const sortedTickets = sortTicketsByPriority(tickets, orderingBy);
  return priorityGrouping.map((ele, idx) => (
    <div key={idx}>
      <div className="flex items-center h-[8vh] ">
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
        {sortedTickets.map((ticket, idx) => {
          if (ticket.priority === ele.priorityLevel) {
            return <Card key={ticket.id} {...ticket} />;
          }
        })}
      </div>
    </div>
  ));
};

const TicketGroupingByUsers = () => {
  const {
    storeData: {
      users,
      tickets,
      filter: { orderingBy },
    },
  } = useStore((state) => state);
  const usersGrouping = users.map((ele, idx) => ({
    avatar: <Avatar userName={ele.name} />,
    name: ele.name,
    userId: ele.id,
  }));
  const sortedTickets = sortTicketsByPriority(tickets, orderingBy);

  return usersGrouping.map((ele, idx) => (
    <div key={idx}>
      <div className="flex items-center h-[8vh] ">
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
        {sortedTickets.map((ticket, idx) => {
          if (ticket.userId === ele.userId) {
            return <Card key={ticket.id} {...ticket} />;
          }
        })}
      </div>
    </div>
  ));
};
