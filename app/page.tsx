"use client";

import { Navbar } from "@/components/navbar/Navbar";
import { GridItems } from "@/components/grouping/Grouping";
import Container from "@/components/container/Container";
import { useStore } from "@/store/store";
import { useEffect } from "react";

export default function Home() {
  const { addUser, storeData, addTickets } = useStore((state) => state);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers"
      );
      const data = await res.json();
      addUser(data.users);
      addTickets(data.tickets);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <div>
        <Navbar />
      </div>
      <div className="bg-gray-100 h-screen">
        <Container>
          <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 ">
            <GridItems />
          </div>
        </Container>
      </div>
    </main>
  );
}
