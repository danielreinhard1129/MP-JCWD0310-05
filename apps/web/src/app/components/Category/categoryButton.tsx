// CategoryButton.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
interface CategoryButtonProps {
  category: string;
  onClick: (category: string) => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ category, onClick }) => {
  return (
    
    <Button onClick={() => onClick(category)} className='bg-mythemes-darkpink'>
      {category}
    </Button>
  );
}

export default CategoryButton;
