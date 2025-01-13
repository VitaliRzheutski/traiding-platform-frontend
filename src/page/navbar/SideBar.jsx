import { Button } from '@/components/ui/button'
import { SheetClose } from '@/components/ui/sheet'
import { ActivityLogIcon, DashboardIcon, ExitIcon, PersonIcon } from '@radix-ui/react-icons'
import { BookmarkIcon, HomeIcon, LandmarkIcon, WalletIcon } from 'lucide-react'
import React from 'react'

const menu = [
    { name: "Home", path: "/", icon: <HomeIcon className='h-6 w-6' /> },
    { name: "Portfolio", path: "/portfolio", icon: <DashboardIcon className='h-6 w-6' /> },
    { name: "WatchList", path: "/watchlist", icon: <BookmarkIcon className='h-6 w-6' /> },
    { name: "Activity", path: "/activity", icon: <ActivityLogIcon className='h-6 w-6' /> },
    { name: "Wallet", path: "/wallet", icon: <WalletIcon className='h-6 w-6' /> },
    { name: "Payment Details", path: "/activitypayment-details", icon: <LandmarkIcon className='h-6 w-6' /> },
    { name: "Withdrawal", path: "/withdrawal", icon: <LandmarkIcon className='h-6 w-6' /> },
    { name: "Profile", path: "/profile", icon: <PersonIcon className='h-6 w-6' /> },
    { name: "Logout", path: "/", icon: <ExitIcon className='h-6 w-6' /> },

]

const SideBar = () => {
    return (
        <div className='mt-10 space-y-5'>
            <div>
                {menu.map((el) => {
                    return (
                        <SheetClose className='w-full'>
                            <Button variant="outline" className="flex gap-5 py-6 w-full">
                                <span className='w-8'>
                                    {el.icon}
                                </span>
                                <p> {el.name}</p>
                            </Button>
                        </SheetClose>
                    )

                })}

            </div>
        </div>
    )
}

export default SideBar