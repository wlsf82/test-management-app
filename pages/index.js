import { Inter } from 'next/font/google'
import { TestDashboard } from '../components/test-dashboard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <TestDashboard />
  )
}
