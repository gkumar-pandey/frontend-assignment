import { getAvatarText } from "@/utils/getAvatarText";
import { FC } from "react";

interface AvatarProps {
  userName?: string;
}
const user = {
  id: "usr-2",
  name: "Yogesh",
  available: true,
};
export const Avatar: FC<AvatarProps> = ({ userName }) => {
  const avatarText = getAvatarText(user.name);
  return (
    <div className="h-5 w-5 rounded-full relative bg-green-700 text-white flex items-center justify-center ">
      <span className="text-[10px]">{avatarText}</span>
      <span className="h-2 w-2 border border-white rounded-full bg-yellow-500 absolute right-0 bottom-0 "></span>
    </div>
  );
};
