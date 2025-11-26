import { useMutation } from "@tanstack/react-query"
import axios from "axios";
import { toast } from "react-toastify";
import { API_URL } from "../config/env";

const CreateNewFolder = async (name:string)=>{
    const res = await axios.post(`${API_URL}/Folders/create`, {name}, { withCredentials: true });
    return res.data;
}

export const useCreateFolder = () =>{
    return useMutation({
        mutationFn: (name:string)=> CreateNewFolder (name),
        onSuccess: (data) => {
            console.log(data)
                    toast.success(data.message || 'Folder created successfully!');
                },
                onError: (error: any) => {
                    console.log(error?.response)
                    const message =
                        error?.response?.data?.message || 'Failed to create folder. Please try again.';
                    toast.error(message);
                },
    })
}