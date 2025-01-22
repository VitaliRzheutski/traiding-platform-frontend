import React, { useEffect } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { useNavigate } from 'react-router-dom'


export default function AssetTable(props) {
    const coin = props.coin;
    // const category = props.category;
    const navigate = useNavigate();

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Coin</TableHead>
                    <TableHead>Symbol</TableHead>
                    <TableHead>Volume</TableHead>
                    <TableHead>Market Cap</TableHead>
                    <TableHead>24h</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {coin.map((item) =>
                    <TableRow key={item.id}>
                        <TableCell onClick={() => navigate(`/market/${item.id}`)} className="font-medium flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span>{item.name}</span>
                        </TableCell>
                        <TableCell>{item.symbol}</TableCell>
                        <TableCell>{item.total_volume}</TableCell>
                        <TableCell>{item.market_cap}</TableCell>
                        <TableCell>{item.price_change_percentage_24h}</TableCell>
                        <TableCell className="text-right">${item.current_price}</TableCell>
                    </TableRow>
                )}
            </TableBody>

        </Table>


    )
}
