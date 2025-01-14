import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { DotFilledIcon } from '@radix-ui/react-icons';
import React, { useState } from 'react'

export const TopUpForm = () => {
    const [amount, setAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState("RAZORPAY");

    const handleChange = (e) => {
        setAmount(e.target.value)
    }
    const handlePaymentMethodChange = (value) => {
        setPaymentMethod(value)
    }
    const handleSubmit = () => {
        console.log(amount, paymentMethod)
    }
    return (
        <div className='pt-10 space-y-5'>
            <div>
                <h1 className='pb-1'>Enter Amount</h1>
                <Input
                    onChange={handleChange}
                    value={amount}
                    className="py-7 text-lg"
                    placeholder="$999" />
            </div>

            <div>
                <h1 className='pb-1'>Select payment method</h1>
                <RadioGroup
                    className="flex"
                    defaultValue="RAZORPAY"
                    onValueChange={(value) => handlePaymentMethodChange(value)}
                >
                    <div className='flex items-center space-x-2 border p-3 px-5 rounded-md'>
                        <RadioGroupItem
                            icon={DotFilledIcon}
                            className="h-9 w-9"
                            value="RAZORPAY"
                            id="r1"
                        />
                        <Label htmlFor="r1">
                            <div className='bg-white rounded-md px-5 py-2 w-32'>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg" />
                            </div>

                        </Label>
                    </div>

                    <div className='flex items-center space-x-2 border p-3 px-5 rounded-md'>
                        <RadioGroupItem
                            icon={DotFilledIcon}
                            className="h-9 w-9"
                            value="STRIPE"
                            id="r2"
                        />
                        <Label htmlFor="r2">
                            <div className='bg-white rounded-md px-5  w-32'>
                                <img className='h-9' src="https://cdn.freebiesupply.com/logos/large/2x/stripe-logo-svg-vector.svg" />
                            </div>

                        </Label>
                    </div>
                </RadioGroup>
            </div>
            <Button
                className="w-full py-7"
                onClick={handleSubmit}
            >
                Submit
            </Button>

        </div>
    )
}
