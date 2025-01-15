import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import { VerifiedIcon } from 'lucide-react'
import { AccountVerificationForm } from './AccountVerificationForm'


export const Profile = () => {
    const handleEnableTwoStepVerification = () => {
        console.log("handleEnableTwoStepVerification")
    }
    return (
        <div className='flex flex-col items-center mb-5'>
            <div className='pt-10 w-full lg:w-[60%]'>
                <Card>
                    <CardHeader className="pb-9">
                        <CardTitle>
                            Your Information
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className='flex gap-32'>
                            <div className='space-y-7'>
                                <div className='flex'>
                                    <p className='w-[9rem]'>Email:</p>
                                    <p className='text-gray-500'>vitalirzh@gmailcom</p>
                                </div>
                                <div className='flex'>
                                    <p className='w-[9rem]'>Full Name:</p>
                                    <p className='text-gray-500'>Vitali Rzheutski</p>
                                </div>

                                <div className='flex'>
                                    <p className='w-[9rem]'>Date of Birth:</p>
                                    <p className='text-gray-500'>05/06/1223</p>
                                </div>

                                <div className='flex'>
                                    <p className='w-[9rem]'>Nationality:</p>
                                    <p className='text-gray-500'>USA</p>
                                </div>

                            </div>
                            <div className='space-y-7'>
                                <div className='flex'>
                                    <p className='w-[9rem]'>Address:</p>
                                    <p className='text-gray-500'>vitalirzh address</p>
                                </div>
                                <div className='flex'>
                                    <p className='w-[9rem]'>City:</p>
                                    <p className='text-gray-500'>NYC</p>
                                </div>

                                <div className='flex'>
                                    <p className='w-[9rem]'>Post Code:</p>
                                    <p className='text-gray-500'>1997</p>
                                </div>

                                <div className='flex'>
                                    <p className='w-[9rem]'>Country:</p>
                                    <p className='text-gray-500'>USA</p>
                                </div>

                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className='mt-6'>
                    <Card className="w-full">
                        <CardHeader className="pb-7">
                            <div className='flex items-center gap-3'>
                                <CardTitle> 2 Step Verification</CardTitle>
                                {true ? <Badge className="space-x-2 text-white bg-green-600">
                                    <VerifiedIcon />
                                    <span>Enabled</span>
                                </Badge> : <Badge className="bg-orange-500">
                                    Disabled
                                </Badge>}
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div>
                                <Dialog>
                                    <DialogTrigger>
                                        <Button>Enabled Two Factor Verification</Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Verify your account</DialogTitle>
                                            <AccountVerificationForm handleSubmit={handleEnableTwoStepVerification} />
                                        </DialogHeader>
                                    </DialogContent>
                                </Dialog>

                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

        </div>
    )
}
