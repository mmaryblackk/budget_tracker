import { ICategory } from "@/types/interfaces";
import axios from "axios";

const CATEGORY_API = "http://localhost:3000/api/categories";

export const getCategories = async (): Promise<ICategory[]> => {
  const { data } = await axios.get(CATEGORY_API);
  return data;
};

export const addCategory = async (
  category: Omit<ICategory, "id">
): Promise<ICategory> => {
  const { data } = await axios.post(CATEGORY_API, category);
  return data;
};

export const updateCategory = async (
  id: number,
  category: Omit<ICategory, "id">
): Promise<ICategory> => {
  const { data } = await axios.put(`${CATEGORY_API}/${id}`, category);
  return data;
};

export const deleteCategory = async (id: number): Promise<void> => {
  await axios.delete(`${CATEGORY_API}/${id}`);
};
