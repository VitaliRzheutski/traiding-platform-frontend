import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';

export const Activity = () => {
    return (
        <div className="px-5 lg:px-20">
            <h1 className="font-bold text-3xl pb-5">Activity</h1>
            <Table className="border">
                <TableHeader className="py-3" >
                    <TableRow>
                        <TableHead className="w-[100px]">Date & Time</TableHead>
                        <TableHead>Treading pair</TableHead>
                        <TableHead>Buy Price</TableHead>
                        <TableHead>Selling Price</TableHead>
                        <TableHead>Order Type</TableHead>
                        <TableHead>Profit/Loss</TableHead>

                        <TableHead className="text-right">Value</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) =>
                        <TableRow key={index}>
                            <TableCell>
                                <p>1/13/2025</p>
                                <p className='text-gray-400'>10:04</p>
                            </TableCell>
                            <TableCell className="font-medium flex items-center gap-3">
                                <Avatar className='-z-50 w-[40px]'>
                                    <AvatarImage src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png' />
                                </Avatar>
                                <span>Bitcoin</span>
                            </TableCell>
                            <TableCell>BTC</TableCell>
                            <TableCell>8707416005</TableCell>
                            <TableCell>1234566789</TableCell>
                            <TableCell>-0.20009</TableCell>
                            <TableCell className="text-right">$80000</TableCell>

                        </TableRow>
                    )}

                </TableBody>
            </Table>

        </div>
    )
}
