import AuthGuard from '../components/AuthGuard'
import DashboardMobileNav from '../components/DashboardMobileNav'
import DashboardSidebar from '../components/DashboardSidebar'
import FoldersList from '../components/FolderList'

const page = () => {
  return (
    <AuthGuard>
      <main className='flex justify-between items-start '>
      <DashboardSidebar />
      <FoldersList />
    </main>
    </AuthGuard>
  )
}

export default page
