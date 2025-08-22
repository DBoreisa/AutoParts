import { useEffect, useState } from "react";
import axios from "axios";

const useProducts = ({ sort = "Date", filters, searchQuery } = {}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const params = { ...filters, sort }; // Combine all query params
                console.log("Fetching with params:", params);
                if (searchQuery) {
                    params.search = searchQuery;  
                }
                
                const queryString = new URLSearchParams(params).toString();

                const res = await axios.get(`https://api.gearpro01e.com/products/?${queryString}`); 
                setProducts(res.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, [sort, filters, searchQuery]);

    return products;
};

export default useProducts;