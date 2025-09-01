import { useEffect, useState } from "react";
import axios from "axios";

const useProducts = ({ sort = "Date", filters = {}, enabled = false } = {}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (!enabled) return;

        const fetchProducts = async () => {
            try {
                const params = new URLSearchParams();

                // Filtrai
                Object.entries(filters).forEach(([key, value]) => {
                    let paramKey = key;

                    // frontendo kintamaji sulygina su backendo 
                    if (key === "categories") {
                        paramKey = "category";
                    }

                    if (Array.isArray(value)) {
                        value.forEach(v => params.append(paramKey, v));
                    } else if (value) {
                        params.append(paramKey, value);
                    }
                });


                // Rikiavimas
                params.append("sort", sort);

                const res = await axios.get(
                `https://api.gearpro01e.com/products/?${params.toString()}`
                );

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