
import useAcceptTransaction from "@/hooks/api/transaction/useAcceptTransaction";
import useRejectTransaction from "@/hooks/api/transaction/useRejectTransaction";
import { CircleCheck, CircleXIcon } from "lucide-react"
import { FC } from "react";

interface ApprovalRowTableProps {
    transactionId: number;
    username: string
    title: string
    quantity: number
    price: number
    amount: number
    status: string  
}


const ApprovalRowTable: FC<ApprovalRowTableProps> = ({
    title,
    amount,
    price,
    quantity,
    status,
    transactionId,
    username,
}) => {
    const { accepting }= useAcceptTransaction()
    const { rejecting }= useRejectTransaction()

    const values = { id: Number(transactionId) }
    return (
        <tr >
            <td className="px-4 py-2">{username}</td>
            <td className="px-4 py-2">{title}</td>
            <td className="px-4 py-2">{quantity}</td>
            <td className="px-4 py-2">{price}</td>
            <td className="px-4 py-2">{amount}</td>
            <td className="px-4 py-2">{status}</td>
            <td className="px-4 py-2"><div className='flex gap-2'>
                <CircleXIcon onClick={() => { rejecting(values) }} className='text-mythemes-red cursor-pointer hover:text-mythemes-red/80' />
                <CircleCheck onClick={() => { accepting(values) }} className='text-green-600 cursor-pointer hover:text-green-600/80' />
            </div></td>
        </tr>
    )
}

export default ApprovalRowTable