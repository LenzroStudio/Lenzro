"use client";
import { create } from "zustand";

export const useSearchStore = create((set) => ({
  desktopOpen: false,
  mobileOpen: false,
  query: "",

  // actions
  setDesktopOpen: (open) => set({ desktopOpen: open }),
  setMobileOpen: (open) => set({ mobileOpen: open }),
  setQuery: (q) => set({ query: q }),
  reset: () => set({ desktopOpen: false, mobileOpen: false, query: "" }),
}));
