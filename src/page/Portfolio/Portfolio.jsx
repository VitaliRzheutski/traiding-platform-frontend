import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';

export const Portfolio = () => {
    return (
        <div className="px-5 lg:px-20">
            <h1 className="font-bold text-3xl pb-5">Portfolio</h1>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Asset</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Unit</TableHead>
                        <TableHead>Change</TableHead>
                        <TableHead>Change%</TableHead>
                        <TableHead className="text-right">Value</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) =>
                        <TableRow key={index}>
                            <TableCell className="font-medium flex items-center gap-3">
                                <Avatar className='-z-50'>
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
