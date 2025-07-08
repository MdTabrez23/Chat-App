import { create } from "zustand";

export const useThemeStore = create((set, get) => ({
  theme: "light", // default

  initializeTheme: () => {
    const saved = localStorage.getItem("chat-theme");
    if (saved) set({ theme: saved });
  },

  setTheme: (newTheme) => {
    localStorage.setItem("chat-theme", newTheme);
    set({ theme: newTheme });
  },
}));
