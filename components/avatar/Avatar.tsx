import { getAvatarText } from "@/utils/getAvatarText";
import { FC } from "react";

interface AvatarProps {
  userName?: string | undefined;
  available?: boolean;
}

export const Avatar: FC<AvatarProps> = ({ userName, available }) => {
  const avatarText = getAvatarText(userName);
  return (
    <div className="h-5 w-5 rounded-full relative bg-green-700 text-white flex items-center justify-center ">
      <span className="text-[10px]">{avatarText}</span>
      <span
        className={`h-2 w-2 border border-white rounded-full  absolute right-0 bottom-0 ${
          available ? "bg-yellow-500" : "bg-slate-400"
        } `}
      ></span>
    </div>
  );
};
