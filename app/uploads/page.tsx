import DashboardSidebar from '../components/DashboardSidebar'
import UploadedDocumentList from '../components/UploadedDocumentList'

const page = () => {
  return (
      <main className='max-h-screen h-screen flex justify-between items-start '>
        <DashboardSidebar/>
        <UploadedDocumentList/>
      </main>
  )
}

export default page
