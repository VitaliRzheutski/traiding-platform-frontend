import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


const Navbar = () => {
    return (
        <div className='px-2 py-3 border-b z-50 bg-background bg-opaciry-0 sticky 
        top-0 left-0 rigth-0 flex justify-between items-center'>

            <div className='flex items-center gap-3'>
                <Sheet>
                    <SheetTrigger>Open</SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Are you absolutely sure?</SheetTitle>
                            <SheetDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>


            </div>
        </div>
    )
}
export default Navbar
