import { useEffect, useState } from "react";
import axios from "axios";

const useProductSearch  = (searchQuery, enabled = false) => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (!enabled || !searchQuery || searchQuery.trim() === "") {
            setResults([]); // isvalo resultatus 
            return;
        }

        const fetchResults = async () => {
            try {
                const params = new URLSearchParams();
                params.append("search", searchQuery);

                const res = await axios.get(
                    `https://api.gearpro01e.com/products/?${params.toString()}`
                );
                setResults(res.data);
            } catch (err) {
                console.error("Error searching products:", err);
            }
        }; 

        fetchResults();
    }, [searchQuery, enabled]);

    return results;
};

export default useProductSearch;