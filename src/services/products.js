import { useQuery, useMutation } from "react-query";
import { axiosInstance } from "./config";

export const useGetProducts = () => {
  const data = useQuery(["get-products"], async () => {
      const response = await axiosInstance.get("/api/product");
      return response.data;
    });
  return data;
}

export const useGetProductById = (id) => {
  const data = useQuery(["get-product-by-id", id], async () => {
      const response = await axiosInstance.get(`/api/product/${id}`);
      return response.data;
    });
  return data;
}

export const useSaveToCart = () => {
  const data = useMutation(["save-product-to-cart"], async (data) => {
    const response = await axiosInstance.post("/api/cart", data);
    return response.data;
  });
  return data;
}