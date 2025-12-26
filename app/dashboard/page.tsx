import React from 'react'
import DashboardSidebar from '../components/DashboardSidebar'
import DashboardMain from '../components/DashboardMain'
import { useAuth } from '../hooks/useAuth'
import AuthGuard from '../components/AuthGuard'

const page = () => {
  return (
    <AuthGuard>
      <main className='bg-primary min-h-screen flex items-center  justify-between'>
        <DashboardSidebar />
        <DashboardMain />
      </main>
    </AuthGuard>
  )
}

export default page
