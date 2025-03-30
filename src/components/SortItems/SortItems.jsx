import React, { useMemo, useState, useEffect } from "react";
import { FormControl, InputLabel, NativeSelect, useTheme } from "@mui/material";
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
        <FormControl fullWidth sx={{ minWidth: 170 }}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Sort by:
            </InputLabel>
            <NativeSelect
                defaultValue={"Date"}
                inputProps={{
                    name: 'sort-by',
                    id: 'sort-by'
                }}
                onChange={handleSort}
            >
                <option value={"Date"}>Date</option>
                <option value={"Alphabetical"}>Alphabetically, A-Z</option>
                <option value={"RevAlpahebetical"}>Alphabetically, Z-A</option>
                <option value={"Price"}>Price, low to high</option>
                <option value={"RevPrice"}>Price, high to low</option>
            </NativeSelect>
        </FormControl>
    );
};

export default SortItems;