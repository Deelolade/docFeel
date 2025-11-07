"use client"
import { useParams } from 'next/navigation'
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { UploadedDocument } from "@/app/types/document";
import DashboardSidebar from '@/app/components/DashboardSidebar';
const page = () => {
    const { id } = useParams()
    console.log(id,)
    return (
        <main>
            <DashboardSidebar />
            
        </main>
    )
}

export default page
