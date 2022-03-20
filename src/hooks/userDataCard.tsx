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
    data: DataProps | null;
    HandleChangeData: (value: DataProps | null) => void;
}

const Context = createContext({} as ContextTypes);

export function CreateDataProvider({children}: ChildrenProps) {
    const [data, setData] = useState<DataProps | null>(null);

    const HandleChangeData = useCallback((value: DataProps | null) => {
        setData(value);
      }, []); 

      const value = useMemo(() => {
        return { HandleChangeData, data };
      }, [HandleChangeData, data]);

      return (
        <Context.Provider value={value}>
          {children}
        </Context.Provider>
      );
}
  
  export const useDataCard = () => useContext(Context);

