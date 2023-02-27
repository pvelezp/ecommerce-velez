import {queryTokens} from "@/constants";
import { useQuery, useMutation } from "react-query";
import { axiosInstance } from "./config";

export const useGetProducts = () => {
  const data = useQuery([queryTokens.GET_PRODUCTS], async () => {
      const response = await axiosInstance.get("/product");
      return response.data;
    });
  return data;
}

export const useGetProductById = (id) => {
  const data = useQuery([queryTokens.GET_PRODUCT_BY_ID, id], async () => {
      const response = await axiosInstance.get(`/product/${id}`);
      return response.data;
    });
  return data;
}

export const useSaveToCart = () => {
  const data = useMutation([queryTokens.SAVE_PRODUCT_TO_CART], async (data) => {
    const response = await axiosInstance.post("/cart", data);
    return response.data;
  });
  return data;
}