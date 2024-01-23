import { createContext, useCallback, useContext, useState } from 'react';
import { ErrorContext } from './ErrorContext';
import { getInventoryAll, putInventory } from '../services/api/inventoryApi';

type InventoryContextType = {
  inventoryList: InventoryItem[];
  getInventories: () => void;
  updateInventories: (itemCode: string, quantity: number) => void;
};

export const InventoryContext = createContext<InventoryContextType>({
  inventoryList: [],
  getInventories: () => {},
  updateInventories: () => {},
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

  const updateInventories = useCallback(
    async (itemCode: string, quantity: number) => {
      try {
        const resp = await putInventory(itemCode, quantity);

        console.log('RESPONSE: ', resp);
        getInventories();
      } catch (error) {
        handleError(error as CustomError);
      }
    },
    [handleError, getInventories]
  );

  const value = {
    inventoryList,
    getInventories,
    updateInventories,
  };

  return (
    <InventoryContext.Provider value={value}>
      {children}
    </InventoryContext.Provider>
  );
};
