import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '@/components/ui/button'
import { DragHandleHorizontalIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import SideBar from './SideBar'


const Navbar = () => {
    return (
        <div className='px-2 py-3 border-b z-50 bg-background bg-opaciry-0 sticky 
        top-0 left-0 rigth-0 flex justify-between items-center'>

            <div className='flex items-center gap-3'>
                <Sheet>
                    <SheetTrigger>
                        <Button variant="ghost" size="icon" className="rounded-full h-11 w-11">
                            <DragHandleHorizontalIcon className='h-7 w-7' />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="border-r-0 flex flex-col justify-center">
                        <SheetHeader>
                            <SheetTitle>
                                <div className="text-3xl flex justify-center items-center gap1">
                                    <Avatar>
                                        <AvatarImage
                                            className="rounded-full w-12 h-12"
                                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png'
                                        ></AvatarImage>
                                    </Avatar>
                                    <div>
                                        <span className='font-bold text-orange-700'>
                                            VRZH
                                        </span>
                                        <span>Tread</span>
                                    </div>
                                </div>
                            </SheetTitle>

                        </SheetHeader>
                        <SideBar />
                    </SheetContent>
                </Sheet>

                <p className='text-sm lg:text-base cursor-pointer'>
                    VRZH Tread
                </p>
                <div className='p-0 ml-9'>
                    <Button variant="outline" className="flex item-center gap-3">
                        <MagnifyingGlassIcon />
                        <span>Search</span>
                    </Button>
                </div>


            </div>
            <div>
                <Avatar>
                    <AvatarFallback>
                        R
                    </AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}
export default Navbar
