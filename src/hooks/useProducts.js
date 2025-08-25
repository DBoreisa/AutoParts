import { useEffect, useState } from "react";
import axios from "axios";

const useProducts = ({ sort = "Date", filters = {}, enabled = false } = {}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (!enabled) return;

        const fetchProducts = async () => {
            try {
                const params = { ...filters, sort }; // Combine all query params
                console.log("Fetching with params:", params);
                /*if (searchQuery) {
                    params.search = searchQuery;  
                }*/
                
                const queryString = new URLSearchParams(params).toString();

                const res = await axios.get(
                    `https://api.gearpro01e.com/products/?${queryString}`
                ); 
                console.log(queryString)
                setProducts(res.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, [sort, filters, enabled]);

    return products;
};

export default useProducts;