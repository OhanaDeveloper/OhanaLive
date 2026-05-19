import { create } from "zustand"

type SettingsState = {
  isOpen: boolean
  toggle: () => void
  open: () => void
  close: () => void
}

export const useSettingsStore = create<SettingsState>((set) => ({
  isOpen: false,
  toggle: () => set((s) => ({ isOpen: !s.isOpen })),
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}))
