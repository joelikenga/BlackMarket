import {createContext, useState} from "react";


export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [filteredData, setFilteredData] = useState([]);

  return (
    <ProductContext.Provider value={{ filteredData, setFilteredData }}>
      {children}
    </ProductContext.Provider>
    );

}
