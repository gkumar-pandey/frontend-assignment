import { FC } from "react";
import { cardProps, cardTitleProps, cardBodyProps } from "./card.type";
import { Avatar } from "../avatar/Avatar";
import Image from "next/image";
import { featureSvg } from "@/utils/staticData";

export const Card: FC<cardProps> = ({ ticket, grouping }) => {
  return (
    <div className="bg-white py-3 px-5 rounded ">
      <CartTitle id={ticket.id} groupingType={grouping} />
      <CardBody
        status={ticket?.status}
        title={ticket?.title}
        tag={ticket.tag}
      />
    </div>
  );
};

const CartTitle: FC<cardTitleProps> = ({ id, groupingType }) => {
  return (
    <div className="flex items-center justify-between">
      <span className="text-gray-500">{id}</span>
      {groupingType !== "user" && <Avatar />}
    </div>
  );
};

const CardBody: FC<cardBodyProps> = ({ status, title, tag, priority }) => {
  return (
    <div>
      <div className="py-1">
        <p>{title}</p>
      </div>
      <div>
        {tag?.map((tag, idx) => (
          <button
            key={idx}
            className="border flex items-center gap-2 rounded px-1 text-sm text-gray-500 relative "
          >
            <Image src={featureSvg} height={12} width={12} alt="feature-svg" />
            <span>{tag}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
