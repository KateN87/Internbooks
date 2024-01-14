import { createContext, useCallback, useContext, useState } from 'react';
import { ErrorContext } from './ErrorContext';
import { getInventoryAll } from '../services/api/inventoryAPI';

type InventoryContextType = {
  inventoryList: InventoryItem[];
  getInventories: () => void;
};

export const InventoryContext = createContext<InventoryContextType>({
  inventoryList: [],
  getInventories: () => {},
});

export const InventoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { handleError } = useContext(ErrorContext);
  const [inventoryList, setInventoryList] = useState<InventoryItem[]>([]);

  const getInventories = useCallback(async () => {
    try {
      const inventoryResponse: InventoryItem[] = await getInventoryAll();

      setInventoryList(inventoryResponse);
    } catch (error) {
      handleError(error as CustomError);
    }
  }, [handleError]);

  const value = {
    inventoryList,
    getInventories,
  };

  return (
    <InventoryContext.Provider value={value}>
      {children}
    </InventoryContext.Provider>
  );
};
