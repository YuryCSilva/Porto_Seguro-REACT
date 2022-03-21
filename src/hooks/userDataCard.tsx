import React, { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react';

interface ChildrenProps{
    children: ReactNode;
}

interface DataProps{
    id: string;
    createdAt: string;
    name: string;
    image: string;
    detail: string;
    address: string;
    phone: string | number;    
}

type ContextTypes = {
    dataCard: DataProps | null;
    HandleChangeData: (value: DataProps | null) => void;
}

const Context = createContext({} as ContextTypes);

export function CreateDataProvider({children}: ChildrenProps) {
    const [dataCard, setDataCard] = useState<DataProps | null>(null);

    const HandleChangeData = useCallback((value: DataProps | null) => {
        setDataCard(value);
      }, []); 

      const value = useMemo(() => {
        return { HandleChangeData, dataCard };
      }, [HandleChangeData, dataCard]);

      return (
        <Context.Provider value={value}>
          {children}
        </Context.Provider>
      );
}
  
  export const useDataCard = () => useContext(Context);

