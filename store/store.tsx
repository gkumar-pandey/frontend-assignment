import { create } from "zustand";

interface User {
  id: string;
  name: string;
  available: boolean;
}

interface Ticket {
  id: string;
  title: string;
  tag: string[];
  userId: string;
  status: string;
  priority: number;
}
interface storeData {
  users: User[] | [];
  tickets: Ticket[] | [];
  filter: any;
}

interface Store {
  storeData: storeData;
  addUser: (users: User[]) => void;
  addTickets: (tickets: Ticket[]) => void;
  setGrouping: (value: string) => void;
  setOrdering: (value: string) => void;
}

const useStore = create<Store>()((set) => ({
  storeData: {
    users: [],
    tickets: [],
    filter: {
      groupingBy: "STATUS",
      orderingBy: "TITLE",
    },
  },
  addUser: (users) =>
    set((state) => ({ storeData: { ...state.storeData, users: users } })),
  addTickets: (tickets) =>
    set((state) => ({ storeData: { ...state.storeData, tickets: tickets } })),
  setGrouping: (value) =>
    set((state) => ({
      storeData: {
        ...state.storeData,
        filter: { ...state.storeData.filter, groupingBy: value },
      },
    })),
  setOrdering: (value) =>
    set((state) => ({
      storeData: {
        ...state.storeData,
        filter: { ...state.storeData.filter, orderingBy: value },
      },
    })),
}));

export { useStore };
