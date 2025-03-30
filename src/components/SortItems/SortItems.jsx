import React from "react";
import { FormControl,InputLabel, NativeSelect } from "@mui/material";
import sortFunc from "./sortFunc";

const SortItems = ({ cars, setSortedCars }) => {
    const handleSort = (sortBy) => {
        const sorted = sortFunc(sortBy, cars);
        setSortedCars(sorted);
    };

    return (
        <FormControl fullWidth sx={{ minWidth: 170 }}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Sort by:
            </InputLabel>
            <NativeSelect
                defaultValue={"Date"}
                inputProps={{
                    name: 'sort-by',
                    id: 'sort-by',
                }}
                onChange={(e) => handleSort(e.target.value)}
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