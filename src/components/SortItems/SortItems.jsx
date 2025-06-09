import React, { useMemo, useState, useEffect } from "react";
import { FormControl, InputLabel, useTheme, MenuItem, Select } from "@mui/material";
import sortFunc from "./sortFunc";

const SortItems = ({ products, setSortedProducts }) => {
    const [sortBy, setSortBy] = useState("Date");

    // Memoize the sorted products array based on the sortBy and products dependencies
    const sortedProducts = useMemo(() => {
        return sortFunc(sortBy, products);
    }, [sortBy, products]);

    // Update the sorted products whenever the sortBy value changes
    useEffect(() => {
        setSortedProducts(sortedProducts);
    }, [sortedProducts, setSortedProducts]);

    const handleSort = (e) => {
        setSortBy(e.target.value);
    };

    const theme = useTheme();
    return (
        <FormControl variant="standard" sx={{ m: 1, minWidth: 170 }}>
            <InputLabel id="demo-simple-select-standard-label">Sort by:</InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={sortBy}
                onChange={handleSort}
                label="Filter by:"
            >
                <MenuItem value={"Date"}>Date</MenuItem>
                <MenuItem value={"Alphabetical"}>Alphabetically, A-Z</MenuItem>
                <MenuItem value={"RevAlpahebetical"}>Alphabetically, Z-A</MenuItem>
                <MenuItem value={"Price"}>Price, low to high</MenuItem>
                <MenuItem value={"RevPrice"}>Price, high to low</MenuItem>
            </Select>
        </FormControl>
    );
};

export default SortItems;

