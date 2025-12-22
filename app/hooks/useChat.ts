import { useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"
import { API_URL } from "../config/env"

const getPreviousChats= async(id: string)=>{
    const res = await axios.get(`${API_URL}/document/chat/${id}`, {withCredentials: true})
    console.log(res.data.messages)
    return res.data.messages
}
const sendMessage = async(id:string, message:string)=>{
    const res = await axios.post(`${API_URL}/document/chat/${id}`, { message: message.trim() }, { withCredentials: true });
}
export const useGetPreviousChats =(id?:string)=>{
    return useQuery({
        queryKey:['chat', id],
        queryFn:()=> getPreviousChats(id!),
        staleTime:0 * 60 * 1000,
        refetchOnWindowFocus: true, 
        refetchOnReconnect: true,
        refetchOnMount: true,
        enabled: Boolean(id),
    })
}

export const useSendMessage = (id:string)=>{
    return useMutation({
        mutationFn: (message:string)=> sendMessage(id, message)
    })
}