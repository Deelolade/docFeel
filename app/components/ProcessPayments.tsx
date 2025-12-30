'use client'
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { BadgeCheck, X } from "lucide-react";
import { usePaymentStatus } from "@/app/hooks/usePayments";

const POLL_INTERVAL = 2000; // 2 seconds

const PaymentProcessingPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const tx_ref = searchParams.get("tx_ref") as string;
    const paymentStatus = usePaymentStatus(tx_ref);
    const [message, setMessage] = useState("Confirming your payment...");
    const { data: statusData,} = paymentStatus;


    useEffect(() => {
        switch (statusData?.toUpperCase()) {
            case "PENDING":
                setMessage("We’re confirming your payment. Please wait...");
                break;
            case "SUCCESSFUL":
                setMessage("Payment successful! Redirecting you...");
                break;
            case "FAILED":
                setMessage("Payment failed. Please try again.");
                break;
            default:
                setMessage("");
        }
    }, [statusData]);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (statusData?.toUpperCase() === "PENDING") {
            interval = setInterval(() => {
                paymentStatus.refetch();
            }, POLL_INTERVAL);
        } else if (statusData?.toUpperCase() === "SUCCESSFUL") {
            const timeout = setTimeout(() => {
                router.push("/dashboard");
            }, 3000);
            return () => clearTimeout(timeout);
        }
    }, [statusData]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-50 to-slate-100 px-4">
            <div className="relative bg-white/90 backdrop-blur shadow-xl rounded-2xl p-10 text-center w-full max-w-md border border-slate-100">

                <div className="mb-6">
                    <span className="font-extrabold text-2xl tracking-tight text-slate-900">
                        DocFeel
                    </span>
                </div>

                {(statusData?.toUpperCase()) === "PENDING" && (
                    <div className="flex justify-center my-8">
                        <div className="w-16 h-16 border-[3px] border-slate-300 border-t-slate-900 rounded-full animate-spin" />
                    </div>
                )}

                {(statusData?.toUpperCase()) === "SUCCESSFUL" && (
                    <div className="flex justify-center my-8">
                        <div className="bg-green-100 text-green-600 rounded-full p-4">
                            <BadgeCheck className="w-12 h-12" />
                        </div>
                    </div>
                )}

                {(statusData?.toUpperCase()) === "FAILED" && (
                    <div className="flex justify-center my-8">
                        <div className="bg-red-100 text-red-600 rounded-full p-4">
                            <X className="w-10 h-10" />
                        </div>
                    </div>
                )}

                {/* Main Message */}
                <h2 className="text-xl font-semibold text-slate-900">
                    {message}
                </h2>

                {/* Subtext */}
                {(statusData?.toUpperCase()) === "PENDING" && (
                    <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                        We’re securely confirming your payment.
                        This usually takes just a few seconds — please keep this page open.
                    </p>
                )}

                {(statusData?.toUpperCase()) === "SUCCESSFUL" && (
                    <p className="mt-3 text-sm text-slate-500">
                        Your account is being updated. You’ll be redirected shortly.
                    </p>
                )}

                {(statusData?.toUpperCase()) === "FAILED" && (
                    <p className="mt-3 text-sm text-slate-500">
                        Something went wrong while processing your payment.
                    </p>
                )}

                {/* Actions */}
                {(statusData?.toUpperCase()) === "FAILED" && (
                    <div className="mt-6">
                        <button
                            onClick={() => router.push("/pricing")}
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg
                     bg-slate-900 text-white text-sm font-medium
                     hover:bg-slate-800 transition-colors"
                        >
                            Retry Payment
                        </button>
                    </div>
                )}

                {/* Footer reassurance */}
                <div className="mt-8 text-xs text-slate-400">
                    You’ll receive access automatically once payment is confirmed.
                </div>
            </div>
        </div>

    );
};

export default PaymentProcessingPage;
