import { ReactNode } from 'react'
import DefaultSidebar from '@/components/lab/SideNavbar'

export default function RootLayout({
    children,
}: {
    children: ReactNode
}) {
    return (
        <>
            <div className='flex flex-row'>
                <DefaultSidebar />
                {children}
            </div>
        </>
    )
}