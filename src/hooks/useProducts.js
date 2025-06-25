import { useEffect, useState } from "react";
import axios from "axios";

const useProducts = ({ sort = "Date", filters = {} } = {}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const params = { sort, ...filters }; // Combine all query params
                const queryString = new URLSearchParams(params).toString();

                const res = await axios.get(`http://localhost:8000/api/products/?${queryString}`);
                setProducts(res.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, [sort, filters]);

    return products;
};

export default useProducts;