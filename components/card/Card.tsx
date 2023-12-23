import { FC, useState } from "react";
import { cardProps, cardBodyProps, Ticket } from "./card.type";
import { Avatar } from "../avatar/Avatar";
import Image from "next/image";
import {
  PRIORITY,
  STATUS,
  USER,
  featureSvg,
  priorityGrouping,
  statusGrouping,
} from "@/utils/staticData";
import { useStore } from "@/store/store";

export const Card: FC<Ticket> = ({
  id,
  priority,
  status,
  tag,
  title,
  userId,
}) => {
  return (
    <div className="bg-white py-3 px-5 rounded my-2 ">
      <CartTitle id={id} userId={userId} />
      <CardBody status={status} title={title} tag={tag} priority={priority} />
    </div>
  );
};

const CartTitle: FC<Ticket> = ({ id, userId }) => {
  const {
    storeData: {
      users,
      filter: { groupingBy },
    },
  } = useStore((state) => state);
  const user = users.find((user) => user.id === userId);
  return (
    <div className="flex items-center justify-between">
      <span className="text-gray-500">{id}</span>
      {groupingBy !== USER && (
        <Avatar userName={user?.name} available={user?.available} />
      )}
    </div>
  );
};

const CardBody: FC<cardBodyProps> = ({ status, title, tag, priority }) => {
  const {
    storeData: {
      filter: { groupingBy },
    },
  } = useStore((state) => state);

  return (
    <div>
      <div className="py-1 flex items-start gap-1 ">
        <>
          {groupingBy !== STATUS &&
            statusGrouping.map(
              (item, idx) =>
                item.title.toLowerCase() === status?.toLocaleLowerCase() && (
                  <Image key={idx} src={item.icon} alt="status-icon" />
                )
            )}
        </>
        <p>{title}</p>
      </div>
      <div className="flex items-center gap-2 ">
        <>
          {groupingBy !== PRIORITY &&
            priorityGrouping.map((item, idx) => {
              return (
                item.priorityLevel == priority && (
                  <button
                    className="border rounded flex items-center justify-center"
                    key={idx}
                  >
                    <Image src={item.icon} alt="priority-icon" />
                  </button>
                )
              );
            })}
        </>
        <>
          {tag?.map((tag, idx) => (
            <button
              key={idx}
              className="border flex items-center gap-2 rounded px-1 text-sm text-gray-500 relative "
            >
              <Image
                src={featureSvg}
                height={12}
                width={12}
                alt="feature-svg"
              />
              <span>{tag}</span>
            </button>
          ))}
        </>
      </div>
    </div>
  );
};
