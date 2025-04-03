import React from "react";
import { 
    FormControl, 
    InputLabel, 
    NativeSelect, 
    Dialog, 
    DialogTitle, 
    DialogContent, 
    Button 
} from "@mui/material";
import { useState } from "react";
import PriceSlider from "../PriceSlider";

const FilterItems = () => {
    const [isSelected, setIsSelected] = useState("");
    const [open, setOpen] = useState(false);

    const handleChange = (event) => {
        const value = event.target.value;
        setIsSelected(value);

        if (value === "Price") {
            setOpen(true); 
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <FormControl fullWidth sx={{ minWidth: 170 }}>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Filter by:
                </InputLabel>
                <NativeSelect
                value={isSelected}
                onChange={handleChange}
                inputProps={{
                    name: 'filter-by',
                    id: 'filter-by'
                }}
                >
                    <option value="Select">Select</option>
                    <option value="Price">Price</option>
                    <option value="Category">Category</option>
                </NativeSelect>          
            </FormControl>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Adjust Price Range</DialogTitle>
                <DialogContent>
                    <PriceSlider />
                    <Button onClick={handleClose} variant="contained" color="primary" sx={{ mt: 2 }}>Close</Button>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default FilterItems;