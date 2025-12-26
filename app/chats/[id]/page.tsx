import AuthGuard from '@/app/components/AuthGuard'
import ChatPage from '@/app/components/ChatPage'
import DashboardSidebar from '@/app/components/DashboardSidebar'

const page = () => {
  return (
    <AuthGuard>
      <main className='bg-primary min-h-screen flex items-center justify-between'>
        <DashboardSidebar />
        <ChatPage />
      </main>
    </AuthGuard>
  )
}

export default page
