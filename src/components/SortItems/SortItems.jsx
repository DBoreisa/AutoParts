import React, { useMemo, useState, useEffect } from "react";
import { FormControl, InputLabel, NativeSelect, useTheme, MenuItem, Select } from "@mui/material";
import sortFunc from "./sortFunc";

const SortItems = ({ cars, setSortedCars }) => {
    const [sortBy, setSortBy] = useState("Date");

    // Memoize the sorted cars array based on the sortBy and cars dependencies
    const sortedCars = useMemo(() => {
        return sortFunc(sortBy, cars);
    }, [sortBy, cars]);

    // Update the sorted cars whenever the sortBy value changes
    useEffect(() => {
        setSortedCars(sortedCars);
    }, [sortedCars, setSortedCars]);

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

