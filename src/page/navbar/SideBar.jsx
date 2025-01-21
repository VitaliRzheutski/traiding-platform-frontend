import { Button } from '@/components/ui/button'
import { SheetClose } from '@/components/ui/sheet'
import { logout } from '@/State/Auth/Action'
import { ActivityLogIcon, DashboardIcon, ExitIcon, PersonIcon } from '@radix-ui/react-icons'
import { BookmarkIcon, HomeIcon, LandmarkIcon, WalletIcon } from 'lucide-react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const menu = [
    { name: "Home", path: "/", icon: <HomeIcon className='h-6 w-6' /> },
    { name: "Portfolio", path: "/portfolio", icon: <DashboardIcon className='h-6 w-6' /> },
    { name: "WatchList", path: "/watchlist", icon: <BookmarkIcon className='h-6 w-6' /> },
    { name: "Activity", path: "/activity", icon: <ActivityLogIcon className='h-6 w-6' /> },
    { name: "Wallet", path: "/wallet", icon: <WalletIcon className='h-6 w-6' /> },
    { name: "Payment Details", path: "/payment-details", icon: <LandmarkIcon className='h-6 w-6' /> },
    { name: "Withdrawal", path: "/withdrawal", icon: <LandmarkIcon className='h-6 w-6' /> },
    { name: "Profile", path: "/profile", icon: <PersonIcon className='h-6 w-6' /> },
    { name: "Logout", path: "/", icon: <ExitIcon className='h-6 w-6' /> },

]

const SideBar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout)
    }


    return (
        <div className='mt-10 space-y-5'>
            <div>
                {menu.map((el, index) => {
                    return (
                        <SheetClose key={index} className='w-full'>
                            <Button
                                variant="outline"
                                className="flex gap-5 py-6 w-full"
                                onClick={() => {
                                    navigate(el.path)
                                    if (el.name === "Logout") {
                                        handleLogout()
                                    }
                                }}
                            >
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