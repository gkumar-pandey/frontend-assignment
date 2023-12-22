import { DarkModeButton, DisplayButton } from "../button/Button";

export const Navbar = () => {
  return (
    <nav className="px-8 py-3  h-[8vh] border  relative flex items-center justify-between ">
      <DisplayButton />
      <DarkModeButton />
    </nav>
  );
};
