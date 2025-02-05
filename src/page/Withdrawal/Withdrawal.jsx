import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
import { getWithdrawalHistory } from "@/State/Withdrawal/Action";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
export const Withdrawal = () => {
    const dispatch = useDispatch();
    const { wallet, withdrawal } = useSelector(store => store)
    useEffect(() => {
        dispatch(getWithdrawalHistory(localStorage.getItem("jwt")))
    }, [])
    return (
        <div className="px-5 lg:px-20">
            <h1 className="font-bold text-3xl pb-5">Withdrawal</h1>
            <Table className="border">
                <TableHeader className="py-3" >
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {withdrawal.history?.map((item, index) =>
                        <TableRow key={index}>
                            <TableCell><p>{item.date}</p> </TableCell>
                            <TableCell>Bank</TableCell>
                            <TableCell>${item.amount}</TableCell>
                            <TableCell className="text-right">{item.status}</TableCell>
                        </TableRow>
                    )}

                </TableBody>
            </Table>

        </div>
    )
}
