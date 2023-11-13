"use client";

import { type RouterOutputs } from "@/trpc/shared";
import { create } from "zustand";

export type Works = RouterOutputs["work"]["getAll"];

interface WorkStore {
  workToDelete?: Works[number];
  workToEdit?: Works[number];
  setWorkToEdit: (work: Works[number]) => void;
  setWorkToDelete: (work: Works[number]) => void;
  cancelEdit: () => void;
  cancelDelete: () => void;
}

export const useWorkStore = create<WorkStore>()((set) => ({
  workToDelete: undefined,
  workToEdit: undefined,
  setWorkToEdit: (work) => set(() => ({ workToEdit: work })),
  cancelEdit: () => set(() => ({ workToEdit: undefined })),
  setWorkToDelete: (work) => set(() => ({ workToDelete: work })),
  cancelDelete: () => set(() => ({ workToDelete: undefined })),
}));
