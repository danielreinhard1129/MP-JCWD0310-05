"use client";

import { axiosInstance } from "@/lib/axios";
import { IFormCreateTransaction, Transaction } from "@/types/transaction.type";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const useCreateTransaction = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const createTransaction = async (payload: IFormCreateTransaction) => {
    try {
      const response = await axiosInstance.post<Transaction>("/transactions", {
        ...payload,
      });
      const { id, totalPrice } = response.data;

      router.push(
        `/${payload.eventId}/transaction/payment?total=${totalPrice}&transactionId=${id}`,
      );
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
      }
    } finally {
      setLoading(false);
    }
  };
  return { createTransaction, isLoading: loading };
};

export default useCreateTransaction;