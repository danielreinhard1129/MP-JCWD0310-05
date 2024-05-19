'use client'
import { Table, TableCaption, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import AuthGuard from '@/hoc/AuthGuard'
import useGetTransactionsByOrganizer from '@/hooks/api/transaction/useGetTransactionsByOrganizer'
import { useAppSelector } from '@/redux/hooks'
import { notFound } from 'next/navigation'
import TableTransactions from '../../components/TableTransactions'

const Transaction = () => {

  const { id } = useAppSelector((state) => state.user);
  const { data: transactions } = useGetTransactionsByOrganizer(id); 

  if (!id) {
    return notFound();
  } 

  return (
    <div className="flex flex-col gap-4 mx-auto justify-center ">
      <h1 className="font-bold text-xl text-mythemes-scarletgum">Transactions</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Username</TableHead>
            <TableHead>Event</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Approval</TableHead>
          </TableRow>
        </TableHeader>
        {transactions.map((transaction, index) => {
          return (
            <TableTransactions
              key={index}
              transactionId={transaction?.id}
              username={transaction?.user?.username}
              title={transaction?.event.title}
              quantity={transaction?.quantity}
              price={transaction?.event.price}
              amount={transaction?.totalPrice}
              status={transaction?.status}
            />
          );
        })}
      </Table>
      <h1 className="font-bold text-xl text-mythemes-scarletgum">Transactions History</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Username</TableHead>
            <TableHead>Event</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Approval</TableHead>
          </TableRow>
        </TableHeader>
        {transactions.map((transaction, index) => {
          return (
            <TableTransactions
              key={index}
              transactionId={transaction?.id}
              username={transaction?.user?.username}
              title={transaction?.event.title}
              quantity={transaction?.quantity}
              price={transaction?.event.price}
              amount={transaction?.totalPrice}
              status={transaction?.status}
            />
          );
        })}
      </Table>


      {/* <h1 className="font-bold text-xl text-mythemes-scarletgum">Transactions</h1>
      <div className='flex flex-col gap-2 bg-mythemes-whitesmoke border p-2'>
        <div className='grid grid-cols-7 text-sm font-bold text-mythemes-scarletgum/80 my-auto'>
          <p className='text-sm'>Customer</p>
          <p className='text-sm'>Event</p>
          <p className='text-sm'>Quantity</p>
          <p className='text-sm'>Price</p>
          <p className='text-sm'>Amount</p>
          <p className='text-sm'>Status</p>
          <p className='text-sm'>Approval</p>
        </div>
        <div className='grid grid-cols-7 text-xs font-semibold text-black/90 my-auto'>
          <p className='my-auto'>{transaction?.user?.username}</p>
          <p className='my-auto'>{transaction?.event.title}</p>
          <p className='my-auto'>{transaction?.quantity}</p>
          <p className='my-auto'>{transaction?.event.price}</p>
          <p className='my-auto'>{transaction?.totalPrice}</p>
          <p className='my-auto'>{transaction?.status}</p>
          <div className='flex gap-2'>
            <CircleXIcon onClick={() => { rejecting(values) }} className='text-mythemes-red cursor-pointer hover:text-mythemes-red/80' />
            <CircleCheck onClick={() => { accepting(values) }} className='text-green-600 cursor-pointer hover:text-green-600/80' />
          </div>
        </div> */}

      {/* </div>
      <h1 className="font-bold text-xl text-mythemes-scarletgum">Transactions</h1>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Customer</th>
            <th className="px-4 py-2">Event</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Approval</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">{transaction?.user?.username}</td>
            <td className="px-4 py-2">{transaction?.event.title}</td>
            <td className="px-4 py-2">{transaction?.quantity}</td>
            <td className="px-4 py-2">{transaction?.event.price}</td>
            <td className="px-4 py-2">{transaction?.totalPrice}</td>
            <td className="px-4 py-2">{transaction?.status}</td>
            <td className="px-4 py-2"><div className='flex gap-2'>
              <CircleXIcon onClick={() => { rejecting(values) }} className='text-mythemes-red cursor-pointer hover:text-mythemes-red/80' />
              <CircleCheck onClick={() => { accepting(values) }} className='text-green-600 cursor-pointer hover:text-green-600/80' />
            </div></td>
          </tr>
        </tbody>
      </table> */}
    </div>
  )
}

export default AuthGuard(Transaction)