import axios from "axios";
import { API_URL } from "../config/env";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const fetchUser = async()=>{
    const res = await axios.get(`${API_URL}/auth/me`, { withCredentials: true });
  return res.data.user;
}

export const logOutUser = async()=>{
  const res = await axios.post(`${API_URL}/auth/logout`, {}, { withCredentials: true });
  return res.data;
}

export const useUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: fetchUser,
    staleTime: 2 * 60 * 1000, // cache 2 minutes
    refetchOnWindowFocus: false,
  });
};
export const useLogOutUser = () => {
  return useMutation({
    mutationFn: logOutUser,
    onSuccess:()=>{
      toast.success("Logged out successfully");
      window.location.href = '/signin';

    }
  })
}