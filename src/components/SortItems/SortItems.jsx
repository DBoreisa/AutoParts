import React, { useMemo, useState, useEffect } from "react";
import { FormControl, InputLabel, useTheme, MenuItem, Select } from "@mui/material";
import axios from "axios";

const SortItems = ({ sortBy, setSortBy }) => {
    const theme = useTheme();

    const handleSort = (e) => {
        setSortBy(e.target.value);
    };

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
                <MenuItem value={"RevAlphabetical"}>Alphabetically, Z-A</MenuItem>
                <MenuItem value={"Price"}>Price, low to high</MenuItem>
                <MenuItem value={"RevPrice"}>Price, high to low</MenuItem>
            </Select>
        </FormControl>
    );
};

export default SortItems;

