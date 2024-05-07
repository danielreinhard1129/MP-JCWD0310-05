// MainComponent.tsx
import React, { useState } from 'react';
import CategoryList from './categoryList';

const Category: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories: string[] = ['Sport', 'Music', 'Education', 'Comedy', 'Hobbies'];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    // You can add further logic here, like fetching data based on the selected category
  }

  return (
    <div>
      
      <CategoryList categories={categories} onCategoryClick={handleCategoryClick}/>
      {selectedCategory && <p>Selected Category: {selectedCategory}</p>}
    </div>
  );
}

export default Category;
