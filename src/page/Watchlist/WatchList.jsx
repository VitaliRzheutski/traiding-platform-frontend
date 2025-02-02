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
import { Button } from '@/components/ui/button';
import { BookmarkFilledIcon } from '@radix-ui/react-icons';
import { useDispatch, useSelector } from 'react-redux';
import { getUserWatchlist } from '@/State/Watchlist/Action';

export const WatchList = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserWatchlist(localStorage.getItem("jwt")))
    }, [])
    const { watchlist } = useSelector(store => store);


    const handleRemoveFromWatchlist = (value) => {
        console.log("value:", value)
    }
    return (
        <div className="px-5 lg:px-20">
            <h1 className="font-bold text-3xl pb-5">Watchlist</h1>
            <Table className="border">
                <TableHeader className="py-3" >
                    <TableRow>
                        <TableHead className="w-[100px]">Coin</TableHead>
                        <TableHead>Symbol</TableHead>
                        <TableHead>Volume</TableHead>
                        <TableHead>Market Cap</TableHead>
                        <TableHead>24h</TableHead>
                        <TableHead>Price</TableHead>

                        <TableHead className="text-right text-red-600">Remove</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {watchlist.items.map((item, index) =>
                        <TableRow key={index}>
                            <TableCell className="font-medium flex items-center gap-3">
                                <Avatar className='-z-50'>
                                    <AvatarImage src={item.image} />
                                </Avatar>
                                <span>{item.name}</span>
                            </TableCell>
                            <TableCell>{item.symbol}</TableCell>
                            <TableCell>8707416005</TableCell>
                            <TableCell>1234566789</TableCell>
                            <TableCell>-0.20009</TableCell>
                            <TableCell className="">${item.current_price}</TableCell>
                            <TableCell className="text-right">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-10 w-10"
                                    onClick={() => handleRemoveFromWatchlist(item.id)}
                                >
                                    <BookmarkFilledIcon className='w-6 h-6' />
                                </Button>

                            </TableCell>
                        </TableRow>
                    )}

                </TableBody>
            </Table>

        </div>
    )
}
