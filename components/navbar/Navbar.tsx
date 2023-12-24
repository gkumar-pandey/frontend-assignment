import { DarkModeButton, DisplayButton } from "../button/Button";

export const Navbar = () => {
  return (
    <nav className="px-8 py-3 h-[8vh] relative flex items-center justify-between dark:bg-[color:var(--secondary-bg-dark-color)] ">
      <DisplayButton />
      <DarkModeButton />
    </nav>
  );
};
