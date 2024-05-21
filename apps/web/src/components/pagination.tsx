import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FC } from 'react';
import ReactPaginate from 'react-paginate';

interface PaginationProps {
  total: number;
  take: number;
  onChangePage: ({ selected }: { selected: number }) => void;
}

const Pagination: FC<PaginationProps> = ({ onChangePage, total, take }) => {
  return (
    <ReactPaginate
      onPageChange={onChangePage}
      pageCount={Math.ceil(total / take)}
      nextLabel={<ChevronRight className='text-mythemes-scarletgum'/>}
      previousLabel={<ChevronLeft className='text-mythemes-scarletgum'/>}
      pageRangeDisplayed={4}
      renderOnZeroPageCount={null}
      containerClassName="flex gap-4 w-fit m-2"
      pageLinkClassName="py-1 px-2 rounded-lg"
      activeLinkClassName="bg-mythemes-scarletgum text-white"
    />
  );
};

export default Pagination;
