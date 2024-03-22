interface ShopCategoryProps {
  category: string;
}

const ShopCategory: React.FC<ShopCategoryProps> = ({ category }) => {
  return (
    <div>
      <h1>{category}</h1>
    </div>
  );
};

export default ShopCategory;