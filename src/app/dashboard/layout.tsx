import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Navbar from '@/app/components/navbar/Navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

        <>
            <Navbar />
            {children}
        </>

  )
}
