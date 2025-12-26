import AuthGuard from '../components/AuthGuard'
import DashboardSidebar from '../components/DashboardSidebar'
import UploadedDocumentList from '../components/UploadedDocumentList'

const page = () => {
  return (
    <AuthGuard>
      <main className='flex justify-between items-start '>
        <DashboardSidebar/>
        <UploadedDocumentList/>
      </main>
    </AuthGuard>
  )
}

export default page
