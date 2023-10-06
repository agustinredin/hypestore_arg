import {createContext, useState} from 'react';

export const productContext = createContext(null)

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([])

    return (
        <productContext.Provider value={{products, setProducts}}>
            {children}
        </productContext.Provider>
    )
}

export default ProductProvider;
