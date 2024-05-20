import { TableCell, TableRow } from '@/components/ui/table';
import useAcceptTransaction from '@/hooks/api/transaction/useAcceptTransaction';
import useRejectTransaction from '@/hooks/api/transaction/useRejectTransaction';
import { CircleCheck, CircleXIcon } from 'lucide-react';
import React, { FC } from 'react'

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

const TableTransactionsHistory: FC<TransactionRowTableProps> = ({
    key,
    title,
    amount,
    price,
    quantity,
    status,
    transactionId,
    username,
}) => {


    return (
        <TableRow key={key} >
            <TableCell className="uppercase font-medium">{username}</TableCell>
            <TableCell className='capitalize'>{title}</TableCell>
            <TableCell>{quantity}</TableCell>
            <TableCell>{price}</TableCell>
            <TableCell>{amount}</TableCell>
            <TableCell>{status}</TableCell>
        </TableRow>
    )
}

export default TableTransactionsHistory


