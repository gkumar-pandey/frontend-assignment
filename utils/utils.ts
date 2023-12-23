import { Ticket } from "@/components/card/card.type";
import {
  PRIORITY,
  STATUS,
  USER,
  priorityGrouping,
  statusGrouping,
} from "./staticData";

type Status = { icon: any; title: string }[];
type Priority = { icon: any; title: string }[];
type User = string[];

type GetGroupingBy = (
  currGrouping: string,
  users: { id: string; name: string; available: boolean }[]
) => Status | Priority | User | undefined;

type SortedTicketByPriority = (tickets: Ticket[], sortBy: string) => Ticket[];

export const getGroupingBy: GetGroupingBy = (currGrouping, users) => {
  if (currGrouping === STATUS) {
    return statusGrouping;
  } else if (currGrouping === PRIORITY) {
    return priorityGrouping;
  } else if (currGrouping === USER) {
    return users?.map(({ name }) => name);
  }
};

export const sortTicketsByPriority: SortedTicketByPriority = (
  tickets,
  sortBy
) => {
  console.log(sortBy);
  if (sortBy === PRIORITY) {
    return tickets?.sort((a, b) => b?.priority - a?.priority);
  } else {
    return tickets?.sort((a, b) => a?.priority - b?.priority);
  }
};
