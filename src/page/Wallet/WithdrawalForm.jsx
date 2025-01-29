import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input'
import { withdrawalRequest } from '@/State/Withdrawal/Action';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export const WithdrawalForm = () => {

    const dispatch = useDispatch();
    const { wallet, withdrawal } = useSelector(store => store)

    const [amount, setAmount] = useState('');

    const handleChange = (e) => {
        setAmount(e.target.value)
    }
    const handleSubmit = () => {
        dispatch(withdrawalRequest({ amount, jwt: localStorage.getItem("jwt") }))
        console.log(amount)
    }
    // const maskNumber = (number) => {
    //     const str = number.toString();
    //     return str.slice(0, -4).replace(/\d/g, '*') + str.slice(-4);
    // };

    return (
        <div className='pt-10 space-y-5'>
            <div className='flex justify-between items-center rounded-md bg-slate-900
            text-xl font-bold px-5 py-4'>
                <p>Available balance</p>
                <p>${wallet.userWallet.balance}</p>
            </div>
            <div className='flex flex-col items-center'>
                <h1>Enter Withdrawal amount</h1>
                <div className='flex items-center justify-center'>
                    <Input
                        onChange={handleChange}
                        value={amount}
                        className="withdrawalInput py-7 border-none focus: outline-none px-0 
                    text-2xl tex-center"
                        placeholder="9999"
                        type="number"
                    />

                </div>
            </div>
            <div>
                <p className='pb-2'>Transfer to</p>
                <div className='flex items-center gap-5 border px-5 py-2 rounded-md'>
                    <img className='h-8 w-8 ' src="https://www.svgrepo.com/show/488788/bank.svg" alt="" />
                    <div>
                        <p className='text-xl font-bold'>{withdrawal.paymentDetails?.bankName}</p>
                        <p className='text-xs'>
                            {/* {maskNumber(withdrawal.paymentDetails?.accountNumber)} */}
                            {withdrawal.paymentDetails?.accountNumber}
                        </p>
                    </div>
                </div>
            </div>
            <DialogClose className='w-full'>
                <Button onClick={handleSubmit} className="w-full py-7 text-xl">
                    Withdrawal
                </Button>
            </DialogClose>


        </div>
    )
}
