import { useQueries } from "@tanstack/react-query"
import axios from "axios"
import { API_URL } from "../config/env"


const getTotalFolders = async (): Promise<number> => {
    const res = await axios.get(`${API_URL}/dashboard/folders/count`, { withCredentials: true });
    return await res.data.folderCount;
}
const getTotalDocuments = async (): Promise<number> => {
    const res = await axios.get(`${API_URL}/dashboard/documents/count`, { withCredentials: true });
    return await res.data.documentCount;
}

const getPointsRemaining = async () => {
    const res = await axios.get(`${API_URL}/dashboard/points`, { withCredentials: true });
    return res.data.pointsRemaining;
};

// HOOKS
export const useDashboardData = () => {
    return useQueries({
        queries: [
            {
                queryKey: ['totalFolders'],
                queryFn: () => getTotalFolders(),
                staleTime: Infinity,
                refetchOnMount: false,
                refetchOnWindowFocus: false,
            },
            {
                queryKey: ['totalUploads'],
                queryFn: () => getTotalDocuments(),
                staleTime: Infinity,
                refetchOnMount: false,
                refetchOnWindowFocus: false,
            },
            // {
            //     queryKey: ['pointsRemaining'],
            //     queryFn: () => getPointsRemaining(),
            // }
        ]
    })
} 