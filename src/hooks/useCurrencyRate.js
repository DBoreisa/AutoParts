import { useEffect, useState } from "react";
import { useCurrencyContext } from "../contexts/CurrencyContext";
import axios from "axios";

const useCurrencyRate = () => {
    const [rate, setRate] = useState(1);
    const { currency } = useCurrencyContext();

    useEffect(() => {
        const fetchCurrency = async () => {
            try{
                const res = await axios.get(`https://api.frankfurter.dev/v1/latest?symbols=${currency}`);
                setRate(res.data.rates[currency]);
            } catch (error) {
                console.error("Error fetching currency rate:", error);
            }
        };
           
        if (currency !== "EUR") {
            fetchCurrency();
        } else {
            setRate(1); 
        }
    }, [currency]);
    
    return rate;
};

export default useCurrencyRate;