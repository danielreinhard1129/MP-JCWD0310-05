
'use client';

import AuthGuard from '@/hoc/AuthGuard';
import useGetEventsByOrganizer from '@/hooks/api/event/useGetEventsByOrganizer';
import useGetTransactionsByOrganizer from '@/hooks/api/transaction/useGetTransactionsByOrganizer';
import { useAppSelector } from '@/redux/hooks';
import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

const ChartTransactions = () => {
  const { id } = useAppSelector((state) => state.user);
  const { data: transaction } = useGetTransactionsByOrganizer({ 
    id: id,
    status: "APPROVED",
 });

  const targetYear = 2024;

  // Initialize counts per month

  const transactionsCountPerMonth = Array(12).fill(0);

  if (transaction) {
    Object.keys(transaction).forEach((key) => {
      const date = new Date(transaction[Number(key)].createdAt);
      if (date.getFullYear() === targetYear) {
        const month = date.getMonth();
        transactionsCountPerMonth[month]++;
      }
    });
  }

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Statistic per Month in 2024',
      },
    },
  };

  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const data = {
    labels,
    datasets: [
      {
        label: 'Transaction',
        data: transactionsCountPerMonth,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default ChartTransactions
