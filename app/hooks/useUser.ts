import axios from "axios";
import { API_URL } from "../config/env";
import { useQuery } from "@tanstack/react-query";

export const fetchUser = async()=>{
    const res = await axios.get(`${API_URL}/auth/me`, { withCredentials: true });
  return res.data.user;
}

export const useUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: fetchUser,
    staleTime: 2 * 60 * 1000, // cache 5 minutes
    refetchOnWindowFocus: false,
  });
};