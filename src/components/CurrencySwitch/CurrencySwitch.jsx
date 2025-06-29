import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useCurrencyContext } from "../../contexts/CurrencyContext";

const CurrencySwitch = () => {
    const { currency, setCurrency } = useCurrencyContext();

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    return (
        <FormControl variant="standard"
            size="small"
            sx={{
                minWidth: 60,
                color: "white",
                "& .MuiInputBase-root": {
                border: "none",
                "&:before": { borderBottom: "none" },
                "&:after": { borderBottom: "none" },
                "&:hover:not(.Mui-disabled):before": { borderBottom: "none" },
                },
            }}
        >
            <InputLabel 
                id="demo-select-small-label"
                sx={{ color: "white" }}
            >
                Currency:
            </InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={currency}
                label="Currency"
                onChange={handleChange}
                disableUnderline
                sx={{
                    color: "white",                      // text color
                    "& .MuiSvgIcon-root": {
                    color: "white",                   // arrow color
                    },
                    "&::before": { borderBottom: "none" },
                    "&::after": { borderBottom: "none" },
                }}
            >
                <MenuItem value="EUR">EUR</MenuItem>
                <MenuItem value="USD">USD</MenuItem>
                <MenuItem value="GBP">GBP</MenuItem>
            </Select>
        </FormControl>
    );
};

export default CurrencySwitch;