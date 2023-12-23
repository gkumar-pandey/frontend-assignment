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

export const getGroupingBy: GetGroupingBy = (currGrouping, users) => {
  if (currGrouping === STATUS) {
    return statusGrouping;
  } else if (currGrouping === PRIORITY) {
    return priorityGrouping;
  } else if (currGrouping === USER) {
    return users?.map(({ name }) => name);
  }
};
