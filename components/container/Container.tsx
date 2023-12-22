import React, { FC } from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="w-[97%] px-6">{children}</div>;
};

export default Container;
