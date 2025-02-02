import React, { useEffect } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrdersForUser } from '@/State/Order/Action';
import { calculateProfit } from '@/utils/calculateProfite';

export const Activity = () => {
    const dispatch = useDispatch();
    const { order } = useSelector(store => store.order)

    useEffect(() => {
        dispatch(getAllOrdersForUser({ jwt: localStorage.getItem("jwt") }))
    }, [])

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
                    {order?.map((item, index) =>
                        <TableRow key={index}>
                            <TableCell>
                                <p>1/13/2025</p>
                                <p className='text-gray-400'>10:04</p>
                            </TableCell>
                            <TableCell className="font-medium flex items-center gap-3">
                                <Avatar className='-z-50 w-[40px]'>
                                    <AvatarImage src={item.orderItem.coin.image} />
                                </Avatar>
                                <span>{item.orderItem.coin.name}</span>
                            </TableCell>
                            <TableCell>${item.orderItem.buyPrice}</TableCell>
                            <TableCell>${item.orderItem.sellPrice}</TableCell>
                            <TableCell>{item.orderType}</TableCell>

                            <TableCell>{calculateProfit(item)}</TableCell>
                            <TableCell className="text-right">{item.price}</TableCell>

                        </TableRow>
                    )}

                </TableBody>
            </Table>

        </div>
    )
}
