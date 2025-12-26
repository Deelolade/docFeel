"use client"
import AuthGuard from '@/app/components/AuthGuard';
import DashboardSidebar from '@/app/components/DashboardSidebar';
import DocumentDetails from '@/app/components/DocumentDetails';

const page = () => {
    
    return (
        <AuthGuard>
            <main className='bg-primary min-h-screen flex items-center justify-between'>
                <DashboardSidebar />
                <DocumentDetails/>
            </main>
        </AuthGuard>
    )
}

export default page
