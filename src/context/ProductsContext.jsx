import { createContext } from "react";
import { apiUrl } from "../apies/Api";
import { useQuery } from "@tanstack/react-query";

export const ProductsContext = createContext();

function ProductsContextProvider({ children }) {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetch(`${apiUrl}`).then((res) => res.json()),
  });
  return (
    <ProductsContext.Provider value={{ data, isLoading }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsContextProvider;
