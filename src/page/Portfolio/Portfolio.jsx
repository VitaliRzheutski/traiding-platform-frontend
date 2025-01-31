import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
import { getUserAsset } from "@/State/Asset/Action";
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Portfolio = () => {

    const dispacth = useDispatch();
    const { asset } = useSelector(store => store)
    useEffect(() => {
        dispacth(getUserAsset(localStorage.getItem("jwt")))
    }, [])

    return (
        <div className="px-5 lg:px-20">
            <h1 className="font-bold text-3xl pb-5">Portfolio</h1>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Asset</TableHead>
                        <TableHead>Symbol</TableHead>
                        <TableHead>Unit</TableHead>
                        <TableHead>Change</TableHead>
                        <TableHead>Change%</TableHead>
                        <TableHead className="text-right">Volume</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {asset.userAssets.map((item, index) =>
                        <TableRow key={index}>
                            <TableCell className="font-medium flex items-center gap-3">
                                <Avatar className='-z-50'>
                                    <AvatarImage src={item.coin.image} />
                                </Avatar>
                                <span>{item.coin.name}</span>
                            </TableCell>
                            <TableCell>{item.coin.symbol.toUpperCase()}</TableCell>
                            <TableCell>{item.quantity}</TableCell>
                            <TableCell>{item.coin.price_change_24h}</TableCell>
                            <TableCell>{item.coin.price_change_percentage_24h}</TableCell>
                            <TableCell className="text-right">{item.coin.total_volume}</TableCell>
                        </TableRow>
                    )}

                </TableBody>
            </Table>

        </div>
    )
}
