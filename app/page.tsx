"use client";
import Image from "next/image";
import { Navbar } from "@/components/navbar/Navbar";
import { GridItems } from "@/components/grouping/Grouping";
import Container from "@/components/container/Container";
import { Card } from "@/components/card/Card";
import { useStore } from "@/store/store";
import { useEffect } from "react";
import { getGroupingBy } from "@/utils/utils";

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

  console.log(storeData);

  return (
    <main>
      <div>
        <Navbar />
      </div>
      <div className="bg-gray-100 h-screen">
        <Container>
          <div className="grid grid-cols-5 gap-4 ">
            <GridItems />
            {/* <GridItems />
            <GridItems />
            <GridItems />
            <GridItems /> */}
          </div>
        </Container>
      </div>
    </main>
  );
}
