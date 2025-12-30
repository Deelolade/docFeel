import React from 'react'
import DashboardSidebar from '../components/DashboardSidebar'
import DashboardMain from '../components/DashboardMain'

const page = () => {
  return (
    <main className='bg-primary flex items-center justify-between'>
      <DashboardSidebar />
      <DashboardMain />
    </main>
  )
}

export default page
