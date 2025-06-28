import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useCurrencyRate from "../../hooks/useCurrencyRate";
import { useCurrencyContext } from "../../contexts/CurrencyContext";

const CurrencySwitch = () => {
    const { currency, setCurrency } = useCurrencyContext();

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    return (
        <FormControl sx={{ m: 1, minWidth: 60 }} size="small">
            <InputLabel id="demo-select-small-label">Currency</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={currency}
                label="Currency"
                onChange={handleChange}
            >
                <MenuItem value="EUR">EUR (€)</MenuItem>
                <MenuItem value="USD">USD ($)</MenuItem>
                <MenuItem value="GBP">GBP (£)</MenuItem>
            </Select>
        </FormControl>
    );
};

export default CurrencySwitch;