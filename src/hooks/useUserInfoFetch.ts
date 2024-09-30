import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { UserWithPurchasedProductsResponse } from "../routes/myPurchase";

async function fetchUserData(userId: string) {
  const response = await axios.get(
    `https://e-commerce-with-stripe-api.vercel.app/user?userId=${userId}`
  );
  return response.data;
}

export function useUserFetch(userId: string) {
  return useQuery<UserWithPurchasedProductsResponse>({
    queryKey: ["user-Info"],
    queryFn: () => fetchUserData(userId),
    enabled: !!userId,
  });
}
