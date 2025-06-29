import { useEffect, useState } from "react";
import axios from "axios";

const useProducts = ({ sort = "Date", filters, searchQuery } = {}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const params = { sort, ...filters }; // Combine all query params
                if (searchQuery) {
                    params.search = searchQuery;  
                }
                
                const queryString = new URLSearchParams(params).toString();

                const res = await axios.get(`http://localhost:8000/api/products/?${queryString}`);
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