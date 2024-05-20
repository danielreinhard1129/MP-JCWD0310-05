'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import useGetEvent from '@/hooks/api/event/useGetEvent';
import useCreateTransaction from '@/hooks/api/transaction/useCreateTransaction';
import { useAppSelector } from '@/redux/hooks';
import { event } from 'cypress/types/jquery';
import { notFound, useRouter } from 'next/navigation';
import { FC, useState } from 'react';

interface TransactionDialogProps {
  price: number;
  ticketLimit: number;
  formattedPrice: string;
  // eventId: number;
  // paramsId: string;
}

const TransactionDialog: FC<TransactionDialogProps> = ({
  price,
  ticketLimit,

}) => {
  const { createTransaction } = useCreateTransaction();
  const user = useAppSelector((state) => state.user);
 
  // const { event } = useGetEvent(event?.id);
  // if (!event?.id) {
  //   return notFound;  // or render a fallback UI
  // }
  const formattedPrice = (price: number): string => {
    return price === 0
      ? 'Free entrance'
      : new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: 0,
        }).format(price);
  };

  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  


  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const totalPrice = price * quantity;
  const formattedTotalPrice =
    price === 0
      ? 'Free entrance'
      : new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: 0,
        }).format(totalPrice);

  const handleSaveChanges = () => {
    router.push(
      `/transaction-detail?quantity=${quantity}&totalPrice=${totalPrice}`,
    );
  };


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{formattedPrice(price)}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Order Summary</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex justify-between items-center">
            <Label htmlFor="name" className="text-right">
              Available seat
            </Label>
            <p>{ticketLimit}</p>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <Label htmlFor="name" className="text-right">
                Amount
              </Label>
            </div>
            <div className="flex">
              <Button onClick={decrement}>-</Button>
              <div className="w-12 flex items-center justify-center">
                {quantity}
              </div>
              <Button onClick={increment}>+</Button>
            </div>
          </div>
          <div className="flex justify-between items-center font-semibold">
            <p>Total Price:</p>
            {formattedTotalPrice}
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSaveChanges}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TransactionDialog;
