import axios from "axios";
import { useMutation } from "@tanstack/react-query";

export interface UserRegisterDetails {
  name: string;
  email: string;
  password_hash: string;
}

async function postData(data: UserRegisterDetails) {
  await axios.post("https://e-commerce-with-stripe-api.vercel.app/user", data);
}

export function useUserRegisterMutate() {
  const mutate = useMutation({
    mutationFn: postData,
  });
  return mutate;
}
