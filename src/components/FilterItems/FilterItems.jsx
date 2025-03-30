import React from "react";
import { FormControl,InputLabel, NativeSelect } from "@mui/material";

const FilterItems = () => {
    return (
        <FormControl fullWidth sx={{ minWidth: 170 }}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Filter by:
            </InputLabel>
            <NativeSelect
            defaultValue={30}
            inputProps={{
                name: 'filter-by',
                id: 'filter-by',
            }}
            >
            <option value={"All"}>All products</option>
            <option value={"Price"}>Price, low to high</option>
            <option value={"RevPrice"}>Price, high to low</option>
            </NativeSelect>
        </FormControl>
    );
};

export default FilterItems;