'use client'

import { Table, TableCaption, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import AuthGuardOrganizer from '@/hoc/AuthGuardOrganizer'
import useGetTransactionsByOrganizer from '@/hooks/api/transaction/useGetTransactionsByOrganizer'
import { useAppSelector } from '@/redux/hooks'
import { notFound } from 'next/navigation'
import { useState } from 'react'
import TableTransactionsHistory from '../../components/TableTransactionHistory'
import TableTransactions from '../../components/TableTransactions'
import Pagination from '@/components/pagination'

const Transaction = () => {
  const [page, setPage] = useState<number>(1);
  const [pageHistory, setPageHistory] = useState<number>(1);
  const { id } = useAppSelector((state) => state.user);
  const { data: transactions, meta, refetch } = useGetTransactionsByOrganizer({
    id: id,
    page,
    take: 10,
    status: "PENDING" 
  });

  const { data: transactionsHistory, meta: metaHistory } = useGetTransactionsByOrganizer({
    id: id,
    page: pageHistory,
    take: 10,
  });


  if (!id) {
    return notFound();
  }

  // useEffect(()=>{    
  //     refetch() 
  // },[refetch])

  const handleChangePaginate = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };

  const handleChangePaginateHistory = ({ selected }: { selected: number }) => {
    setPageHistory(selected + 1);
  };

  return (
    <div className="flex flex-col gap-4 mx-auto justify-center ">
      <h1 className="font-bold text-xl text-mythemes-scarletgum">Transactions</h1>

      <Tabs defaultValue="ongoing" className="w-full">
        <TabsList>
          <TabsTrigger value="ongoing">Ongoing Transactions</TabsTrigger>
          <TabsTrigger value="history">Transactions History</TabsTrigger>
        </TabsList>
        <TabsContent className='relative' value="ongoing">
          <div className='absolute right-0 -top-10'>
            <Pagination
              total={meta?.total || 0}
              take={meta?.take || 0}
              onChangePage={handleChangePaginate}
            />
          </div>
          <Table>
            {(transactions.length<1)?(
              <TableCaption className='text-xl '>You Have No Transaction Yet.</TableCaption>
            ):("")}
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
        </TabsContent>
        <TabsContent className='relative' value="history">
          <div className='absolute right-0 -top-10'>
            <Pagination
              total={metaHistory?.total || 0}
              take={metaHistory?.take || 0}
              onChangePage={handleChangePaginateHistory}
            />
          </div>
          <Table>
          {(transactionsHistory.length<1)?(
              <TableCaption className='text-xl '>You Have No Transaction History Yet.</TableCaption>
            ):("")}
            <TableHeader>
              <TableRow>
                <TableHead>Username</TableHead>
                <TableHead>Event</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            {transactionsHistory.map((transactionsHistory, index) => {
              return (
                <TableTransactionsHistory
                  key={index}
                  transactionId={transactionsHistory?.id}
                  username={transactionsHistory?.user?.username}
                  title={transactionsHistory?.event.title}
                  quantity={transactionsHistory?.quantity}
                  price={transactionsHistory?.event.price}
                  amount={transactionsHistory?.totalPrice}
                  status={transactionsHistory?.status}
                />
              );
            })}
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default AuthGuardOrganizer(Transaction)