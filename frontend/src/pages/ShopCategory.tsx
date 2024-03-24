import React, { useContext } from 'react';
import '/CSS/ShopCategory.css';
import { ShopContext } from '../context/ShopContext.tsx';

interface ShopCategoryProps {
  category: string;
}

const ShopCategory = ({ category }: ShopCategoryProps): JSX.Element => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className='shop-catergory'>
        <img src={} alt=""/>
    </div>
  );
}

export default ShopCategory;