import React, { useState } from "react";
import { FormControl,InputLabel, Select, MenuItem } from "@mui/material";

const FilterItems = () => {
    const [filter, setFIlter] = useState("All")

    return (
        <FormControl variant="standard" sx={{ m: 1, minWidth: 170 }}>
            <InputLabel id="demo-simple-select-standard-label">Filter by:</InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={filter}
                // onChange={handleFilter}
                label="Filter by:"
            >
                <MenuItem value={"All"}>All products</MenuItem>
                <MenuItem value={"Price"}>Price, low to high</MenuItem>
                <MenuItem value={"RevPrice"}>Price, high to low</MenuItem>
            </Select>
        </FormControl>
    );
};

export default FilterItems;

