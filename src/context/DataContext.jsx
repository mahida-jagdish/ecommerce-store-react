import { createContext, use } from "react";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState();
    // fetchhing all product from API
    const fetchAllProducts = async () => {
        try {
            const res = await axios.get("https://fakestoreapi.com/products?limit=150");
            setData(res.data);
        }
        catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const getUniqueCategories = (data, property) => {
        let newVAl = data?.map((curElem) => {
            return curElem[property]
        })
        newVAl = ["All",...new Set(newVAl)];
        return newVAl
      }
      const categoryOnlyData = getUniqueCategories(data,"category")
      const brandOnlyData = getUniqueCategories(data,"brand")
    return (
        <DataContext.Provider value={{ data, setData, fetchAllProducts, categoryOnlyData, brandOnlyData }}>
            {children}
        </DataContext.Provider>
    );
};

export const getData = () => useContext(DataContext);