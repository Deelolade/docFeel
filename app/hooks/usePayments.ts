import { useQuery } from "@tanstack/react-query"
import { API_URL } from "../config/env";
import axios from "axios";

const getPaymentStatus = async (tx_ref: string) => {
    const res = await axios.get(`${API_URL}/payments/status?tx_ref=${encodeURIComponent(tx_ref)}`, { withCredentials: true });
    return res.data.status;
}
export const usePaymentStatus = (tx_ref: string) => {
    return useQuery({
        queryKey: ["paymentStatus", tx_ref],
        queryFn: () => getPaymentStatus(tx_ref),
        enabled: !!tx_ref,
        // refetchInterval: 3000, // poll every 3s
        retry: false,
    })
}