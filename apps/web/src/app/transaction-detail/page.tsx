'use client';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const TransactionDetails = () => {
  const searchParams = useSearchParams();
  const quantity = searchParams.get('quantity');
  const totalPrice = searchParams.get('totalPrice');

  const [formattedTotalPrice, setFormattedTotalPrice] = useState<string>('');

  useEffect(() => {
    if (totalPrice) {
      setFormattedTotalPrice(
        new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: 0,
        }).format(Number(totalPrice)),
      );
    }
  }, [totalPrice]);

  if (!quantity || !totalPrice) {
    return <p>Loading...</p>;
  }

  return (
    <main className='flex justify-center items-center h-[90vh]'>
      <Card className='border-2 border-mythemes-scarletgum'>
        <div className="container mx-auto px-4 py-8">
          <CardHeader>
            <h1 className="text-2xl font-bold mb-4">Transaction Details</h1>
          </CardHeader>
          <CardContent>
            <p className="mb-2">Quantity: {quantity}</p>
            <p className="mb-2">Total Price: {formattedTotalPrice}</p>
          </CardContent>
          {/* Add more details or actions here if needed */}
        </div>
      </Card>
    </main>
  );
};

export default TransactionDetails;
