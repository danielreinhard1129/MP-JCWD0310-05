import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { TableCell, TableRow } from '@/components/ui/table';
import useAcceptTransaction from '@/hooks/api/transaction/useAcceptTransaction';
import useRejectTransaction from '@/hooks/api/transaction/useRejectTransaction';
import { CircleCheck, CircleXIcon } from 'lucide-react';
import { FC } from 'react';

interface TransactionRowTableProps {
    key: number;
    transactionId: number;
    username: string
    title: string
    quantity: number
    price: number
    amount: number
    status: string
}

const TableTransactions: FC<TransactionRowTableProps> = ({
    key,
    title,
    amount,
    price,
    quantity,
    status,
    transactionId,
    username,
}) => {
    const { accepting } = useAcceptTransaction()
    const { rejecting } = useRejectTransaction()
    const values = { id: Number(transactionId) }

    return (
        <TableRow key={key} >
            <TableCell className="uppercase font-medium">{username}</TableCell>
            <TableCell className='capitalize'>{title}</TableCell>
            <TableCell>{quantity}</TableCell>
            <TableCell>{price}</TableCell>
            <TableCell>{amount}</TableCell>
            <TableCell>{status}</TableCell>
            <TableCell>
                <div className='flex gap-4 justify-center'>
                    <Dialog>
                        <DialogTrigger><CircleXIcon className='text-mythemes-red cursor-pointer hover:text-mythemes-red/80' /></DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Are you absolutely sure?</DialogTitle>
                                <DialogDescription>
                                    This action cannot be undo. This will permanently reject your customer transactions request.
                                </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                                <Button onClick={() => { rejecting(values) }}>Reject</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                    <Dialog>
                        <DialogTrigger><CircleCheck className='text-green-600 cursor-pointer hover:text-green-600/80' /></DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Are you absolutely sure?</DialogTitle>
                                <DialogDescription>
                                This action cannot be undo. This will permanently Accept your customer transactions request.
                                </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                                <Button onClick={() => { accepting(values) }}>Accept</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </TableCell>
        </TableRow>
    )
}

export default TableTransactions


