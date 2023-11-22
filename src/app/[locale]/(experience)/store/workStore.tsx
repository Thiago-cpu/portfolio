"use client";

import { type RouterOutputs } from "@/trpc/shared";
import { create } from "zustand";
import { type TFormSchema as WorkToCreate } from "../create/createWorkForm";

export type Works = RouterOutputs["work"]["getAll"];

interface WorkStore {
  workToDelete?: Works[number];
  workToEdit?: Works[number];
  setWorkToEdit: (work: Works[number]) => void;
  setWorkToDelete: (work: Works[number]) => void;
  cancelEdit: () => void;
  cancelDelete: () => void;
  workToCreate: WorkToCreate;
  setWorkToCreate: (work: WorkToCreate) => void;
  emptyWorkToCreate: () => void;
}

const DEFAULT_WORK_TO_CREATE = {
  index: 0,
  logo: "",
  location: "",
  range: "",
  text_en: "",
  text_es: "",
  title: "",
  page: {
    href: "",
    label: "",
  },
  technologies: [],
};

export const useWorkStore = create<WorkStore>()((set) => ({
  workToCreate: DEFAULT_WORK_TO_CREATE,
  workToDelete: undefined,
  workToEdit: undefined,
  emptyWorkToCreate: () =>
    set(() => ({ workToCreate: DEFAULT_WORK_TO_CREATE })),
  setWorkToCreate: (work) => set(() => ({ workToCreate: work })),
  setWorkToEdit: (work) => set(() => ({ workToEdit: work })),
  cancelEdit: () => set(() => ({ workToEdit: undefined })),
  setWorkToDelete: (work) => set(() => ({ workToDelete: work })),
  cancelDelete: () => set(() => ({ workToDelete: undefined })),
}));
