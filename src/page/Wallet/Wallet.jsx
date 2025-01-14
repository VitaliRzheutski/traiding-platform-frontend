import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { ReloadIcon } from '@radix-ui/react-icons'
import { CopyIcon, DollarSign, ShuffleIcon, UploadIcon, WalletIcon } from 'lucide-react'
import React from 'react'
import { TopUpForm } from './TopUpForm'
import { WithdrawalForm } from './WithdrawalForm'
import { TransferForm } from './TransferForm'

export const Wallet = () => {
    return (
        <div className='pt-10 w-full lg:w-[60]%'>
            <Card>
                <CardHeader className="pb-9">
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-5'>
                            <WalletIcon size={30} />
                            <div>
                                <CardTitle className="tex-2xl">My Wallet</CardTitle>
                                <div className='flex items-center gap-2'>
                                    <p className='text-gray-200 text-sm'>
                                        #475Ed
                                    </p>
                                    <CopyIcon size={12} className='cursor-pointer hover:text-slate-300'>

                                    </CopyIcon>

                                </div>
                            </div>
                        </div>
                        <ReloadIcon className='w-6 h-6 cursor-pointer hover:text-gray-400' />
                    </div>
                </CardHeader>
                <CardContent>
                    <div className='flex items-center'>
                        <DollarSign />
                        <span className='text-2xl font-semibold'>
                            20000
                        </span>
                    </div>
                    <div className='flex gap-7 mt-5'>
                        <Dialog>
                            <DialogTrigger>
                                <div className='h-24 w-24 hover:text-gray-400 cursor-pointer
                                                flex flex-col items-center justify-center
                                                rounded-md shadow-slate-800 shadow-md'>
                                    <UploadIcon />
                                    <span className='text-sm mt-2'>Add money</span>
                                </div>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>
                                        Top Up your Wallet
                                    </DialogTitle>
                                </DialogHeader>
                                <TopUpForm />
                            </DialogContent>
                        </Dialog>

                        <Dialog>
                            <DialogTrigger>
                                <div className='h-24 w-24 hover:text-gray-400 cursor-pointer
                                                flex flex-col items-center justify-center
                                                rounded-md shadow-slate-800 shadow-md'>
                                    <UploadIcon />
                                    <span className='text-sm mt-2'>Withdrawal</span>
                                </div>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>
                                        Request withdrawal
                                    </DialogTitle>
                                </DialogHeader>
                                <WithdrawalForm />
                            </DialogContent>
                        </Dialog>

                        <Dialog>
                            <DialogTrigger>
                                <div className='h-24 w-24 hover:text-gray-400 cursor-pointer
                                                flex flex-col items-center justify-center
                                                rounded-md shadow-slate-800 shadow-md'>
                                    <ShuffleIcon />
                                    <span className='text-sm mt-2'>Transfer</span>
                                </div>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle className="text-center text-xl">
                                        Transfer to other wallet
                                    </DialogTitle>
                                </DialogHeader>
                                <TransferForm />
                            </DialogContent>
                        </Dialog>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
