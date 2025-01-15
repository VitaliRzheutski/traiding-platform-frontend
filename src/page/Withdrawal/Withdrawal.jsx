import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
export const Withdrawal = () => {
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
                    {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) =>
                        <TableRow key={index}>
                            <TableCell><p>January 14, 2024 at 10:24</p> </TableCell>
                            <TableCell>Bank</TableCell>
                            <TableCell>-0.20009</TableCell>
                            <TableCell className="text-right">$80000</TableCell>
                        </TableRow>
                    )}

                </TableBody>
            </Table>

        </div>
    )
}
