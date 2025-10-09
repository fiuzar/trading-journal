import { Card } from "../ui/card"
import {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableRow,
    TableCell,
    TableCaption,
} from "../ui/table"
import {Input} from "../ui/input"
import { Button } from "../ui/button"
import { PlusIcon } from "lucide-react"

export default function DashboardJournal({className}) {
    return (
        <Card className={`${className} px-3 relative`}>
            <h2 className="text-3xl font-bold mb-4">Trade Journal</h2>
            <div className="lg:absolute lg:max-w-96 flex gap-3 right-4">
                <Input type="text" placeholder="Search..." className="flex-auto" />
                <Button className={`text-white bg-green-700`}>
                    <PlusIcon size={16} />
                </Button>
            </div>

            <Table>
                <TableCaption>A list of your recent trades.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Symbol</TableHead>
                        <TableHead>Entry</TableHead>
                        <TableHead>SL</TableHead>
                        <TableHead>TP</TableHead>
                        <TableHead>Lot Size</TableHead>
                        <TableHead>Risk %</TableHead>
                        <TableHead>Reward %</TableHead>
                        <TableHead>P/L</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody></TableBody>
            </Table>
        </Card>
    )
}