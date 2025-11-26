import { useMutation } from "@tanstack/react-query"
import axios from "axios";
import { toast } from "react-toastify";
import { API_URL } from "../config/env";

const CreateNewFolder = async (name:string)=>{
    const res = await axios.post(`${API_URL}/Folders/create`, {name}, { withCredentials: true });
    return res.data;
    // api/Folders/create
}

export const useCreateFolder = () =>{
    return useMutation({
        mutationFn: (name:string)=> CreateNewFolder (name),
        onSuccess: (data) => {
                    toast.success(data.message || 'Folder created successfully!');
                    // queryClient.invalidateQueries({ queryKey: ['document', id] });
                    // queryClient.invalidateQueries({ queryKey: ['documents'] });
                    // queryClient.invalidateQueries({ queryKey: ['user'] });
        
                },
                onError: (error: any) => {
                    const message =
                        error?.response?.data?.message || 'Something went wrong while summarizing';
                    toast.error(message);
                },
    })
}