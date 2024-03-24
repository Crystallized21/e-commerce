import React, {createContext} from "react";
import all_product from '../components/assets/all_product.ts'


interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  new_price: number;
  old_price: number;
}

interface ShopContentValue {
  all_product: Product[];
}

export const ShopContext = createContext<ShopContentValue | null>(null);

interface ShopContentProviderProps {
  children: React.ReactNode;
}

const ShopContentProvider = ({ children }: ShopContentProviderProps) => {
    const contextValue = {all_product};

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
}

export default ShopContentProvider;