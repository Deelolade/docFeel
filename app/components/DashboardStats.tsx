'use client'
import { Folder, Upload, Coins, BarChart3 } from "lucide-react";
import { useDashboardData } from "../hooks/useDashboard";
import Loading from "./ui/Loading";
import ErrorState from "./ui/ErrorState";
import { useUserStore } from "../store/userStore";


export function DashboardStats() {
  const { user } = useUserStore();
  const currentUser = { ...user };
  const [totalFoldersQuery, totalDocumentsQuery] = useDashboardData()
   const hasError = totalFoldersQuery.error || totalDocumentsQuery.error;

  if (hasError) {
    return (
      <ErrorState
        message="Failed to load dashboard data."
        onRetry={() => {
          totalFoldersQuery.refetch();
          totalDocumentsQuery.refetch();
        }}
      />
    );
  }
  const isLoading = totalFoldersQuery.isLoading || totalDocumentsQuery.isLoading;
  const isError = totalFoldersQuery.isError || totalDocumentsQuery.isError;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 mb-10">
      {isLoading && <Loading/>}
      {isError && <ErrorState/>}
      {/* Total Folders */}
      <div className="bg-blue-600 rounded-2xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <Folder className="w-8 h-8 text-blue-100" />
          <BarChart3 className="w-5 h-5 text-blue-200" />
        </div>
        <p className="text-blue-100 text-sm mb-1">Total Folders</p>
        <p className="text-4xl font-bold mb-2 text-white">{totalFoldersQuery.data ?? 0}</p>
        <p className="text-blue-100 text-xs">Organized document spaces</p>
      </div>

      {/* Total PDFs Uploaded */}
      <div className="bg-green-600 rounded-2xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <Upload className="w-8 h-8 text-green-100" />
          <BarChart3 className="w-5 h-5 text-green-200" />
        </div>
        <p className="text-green-100 text-sm mb-1">Total PDFs Uploaded</p>
        <p className="text-4xl font-bold mb-2 text-white">{totalDocumentsQuery.data ?? 0}</p>
        <p className="text-green-100 text-xs">Ready for analysis</p>
      </div>

      {/* Points Remaining */}
      <div className="bg-purple-600 rounded-2xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <Coins className="w-8 h-8 text-purple-100" />
          <BarChart3 className="w-5 h-5 text-purple-200" />
        </div>
        <p className="text-purple-100 text-sm mb-1">Credits Remaining</p>
        <p className="text-4xl font-bold mb-2 text-white">{currentUser?.credits ||0}</p>
        <p className="text-purple-100 text-xs">Used for PDF analysis</p>
      </div>

    </div>
  );
}
