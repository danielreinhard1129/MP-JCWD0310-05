// CategoryList.tsx
import React from 'react';
import CategoryButton from './categoryButton';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface CategoryListProps {
  categories: string[];
  onCategoryClick: (category: string) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  onCategoryClick,
}) => {
  return (
    <div className="mx-5 md:flex justify-center">
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full max-w-sm md:max-w-screen-lg md:flex md:justify-center"
      >
        <CarouselContent>
          {categories.map((category, index) => (
            <div className="ml-4">
              <CategoryButton
                key={index}
                category={category}
                onClick={onCategoryClick}
              />
            </div>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious className='hidden'/>
        <CarouselNext className='hidden'/> */}
      </Carousel>

     

    </div>
  );
};

export default CategoryList;
