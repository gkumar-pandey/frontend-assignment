import Image from "next/image";
import { Navbar } from "@/components/navbar/Navbar";
import { GroupingTitle } from "@/components/grouping/Grouping";
import Container from "@/components/container/Container";
import { Card } from "@/components/card/Card";

export default function Home() {
  const ticket = {
    id: "CAM-1",
    title: "Update User Profile Page UI",
    tag: ["Feature request"],
    userId: "usr-1",
    status: "Todo",
    priority: 4,
  };

  return (
    <main>
      <div>
        <Navbar />
      </div>
      <div className="bg-gray-100 h-screen">
        <Container>
          <div className="grid grid-cols-5 gap-4 ">
            <div>
              <GroupingTitle title="Backlog" />
              <Card ticket={ticket} grouping="status" />
            </div>
            <div>
              <GroupingTitle title="Backlog" />
            </div>
            <div>
              <GroupingTitle title="Backlog" />
            </div>
            <div>
              <GroupingTitle title="Backlog" />
            </div>
            <div>
              <GroupingTitle title="Backlog" />
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}
