import { createContext, useState } from "react";

export const DataContext = createContext();


const dataFix = {
    id: '',
    name: 'default',
    lastName: '',
    email : ''
  }


export const DataProvider=  ({children}) => {
  
    
    const [data, setData] = useState(dataFix)
    
    return (
        <DataContext.Provider value={{
            data,
            setData
        }}>
            {children}
        </DataContext.Provider>
    )
}