import PaymentProcessingPage from '@/app/components/ProcessPayments'
import Loading from '@/app/components/ui/Loading'
import { Suspense } from 'react'
const page = () => {
  return (
    <div>
      <Suspense fallback={<Loading/>}>
        <PaymentProcessingPage/>
      </Suspense>
    </div>
  )
}

export default page
