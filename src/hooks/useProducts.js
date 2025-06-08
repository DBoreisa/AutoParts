import { useEffect, useState } from "react";
import axios from "axios";

const useProducts = () => {
    const [products, setProduscts] = useState([]);

        useEffect(() => {
            axios.get("http://localhost:8000")
                .then(res => setProduscts(res.data))
                .catch(err => console.error(err));
        }, []);

    return products;
};

export default useProducts;