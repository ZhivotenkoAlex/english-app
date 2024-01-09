import Dashboard from '@/components/pages/Dashboard'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard | EasyWay',
  description: 'Easy way to learn English',
}

export default function DashboardPage() {
  return (
    <>
      <Dashboard />
    </>
  )
}
