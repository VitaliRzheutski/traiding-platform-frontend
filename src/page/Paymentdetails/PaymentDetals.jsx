import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { PaymentDetailsForm } from "./PaymentDetailsForm"

export const PaymentDetals = () => {
    return (
        <div className="px-20">
            <h1 className="text-3xl font-bold py-10">Payment Details</h1>

            {false ? <Card>
                <CardHeader>
                    <CardTitle>
                        Bank of America
                    </CardTitle>
                    <CardDescription>
                        A/C No
                        *************1372
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center">
                        <p className="w-32">A/C Holder</p>
                        <p className="text-gray-400"> : Vitali Rzh</p>
                    </div>
                    <div className="flex items-center">
                        <p className="w-32">IFSC</p>
                        <p className="text-gray-400"> : BoA230000044</p>
                    </div>
                </CardContent>
            </Card> : <Dialog>
                <DialogTrigger>
                    <Button className="py-6">Add payment details</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Payment Details</DialogTitle>
                        <PaymentDetailsForm />
                    </DialogHeader>
                </DialogContent>
            </Dialog>}


        </div>
    )
}
