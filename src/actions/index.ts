"use server";
import axios from "axios";

export const registerCustomer = async (email: string) => {
  await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/customers/new`, {
    email,
  });
};
