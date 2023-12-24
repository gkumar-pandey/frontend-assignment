import { create } from "zustand";

interface ThemeState {
  isDark: boolean;
  toggleDark: () => void;
}

export const useTheme = create<ThemeState>()((set) => ({
  isDark: false,
  toggleDark: () =>
    set((state) => {
      document.body.classList.toggle("dark");
      return { isDark: !state.isDark };
    }),
}));
