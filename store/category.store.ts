"use client"


import { create } from "zustand"

export type Category = {
  id: string;
  slug: string;
  title: string;
  description?: string;
};

type CategoryState = {
  categories: Category[];
  loading: boolean;
  error?: string;
  setState: (data: Partial<CategoryState>) => void;
};


export const useCategoryStore = create<CategoryState>((set) => ({
    categories: [],
    loading: false,
    error: undefined,
    setState: (data) => set((state) => ({ ...state, ...data })),
}))