import React from "react";
import { 
    FormControl, 
    InputLabel, 
    Select, 
    MenuItem,
    Dialog, 
    DialogTitle, 
    DialogContent, 
    Button 
} from "@mui/material";
import { useState } from "react";
import PriceSlider from "../PriceSlider";
import CategorySelection from "../CategorySelection";

const FilterItems = ({ filters, setFilters }) => {
    const [isSelected, setIsSelected] = useState("Select");
    const [openPrice, setOpenPrice] = useState(false);
    const [openCategory, setOpenCategory] = useState(false);
    const [priceRange, setPriceRange] = useState([0, 100000]);
    const [selectedCategories, setSelectedCategories] = useState([]);

     const handleChange = (event) => {
        const value = event.target.value;
        setIsSelected(value);

        if (value === "Price") {
            setOpenPrice(true);
        } else if (value === "Category") {
            setOpenCategory(true);
        } else if (value === "On sale") {
            setFilters({});  // Reset filters
            handleOnSale();
        } else if (value === "Select") {
            setFilters({});  // Reset filters
        }
    };

    const handleClose = () => {
        setOpenPrice(false);
        setOpenCategory(false);
        setIsSelected("Select");
    };

    const handleFilterSubmit = () => {
        const [min_price, max_price] = priceRange;
        setFilters((prev) => ({
            ...prev,
            min_price,
            max_price,
        }));
        handleClose();
    };

    const handleCategorySubmit = () => {
        setFilters((prev) => ({
            ...prev,
            categories: selectedCategories,
        }));
        handleClose();
    };

    const handleOnSale = () => {
        setFilters((prev) => ({
            ...prev,
            on_sale: !prev.on_sale,
        }));
        handleClose();
    };

    return (
        <>
            <FormControl variant="standard" sx={{ width: 170 }}>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Filter by:
                </InputLabel>
                <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={isSelected}
                onChange={handleChange}
                label="Filter by:"
                >
                    <MenuItem value="Select">Select</MenuItem>
                    <MenuItem value="Price">Price</MenuItem>
                    <MenuItem value="Category">Category</MenuItem>
                    <MenuItem value="On sale">On sale</MenuItem>
                </Select>          
            </FormControl>

            <Dialog open={openPrice} onClose={handleClose}>
                <DialogTitle sx={{textAlign: "center"}}>Price Range:</DialogTitle>
                <DialogContent sx={{textAlign: "center"}}>
                    <PriceSlider setPriceRange={setPriceRange}/>
                    <Button 
                        onClick={handleFilterSubmit} 
                        variant="contained" color="primary" 
                        sx={{ mt: 2 }}
                    >
                        Submit
                    </Button>
                </DialogContent>
            </Dialog>

            <Dialog open={openCategory} onClose={handleClose}>
                <DialogTitle sx={{textAlign: "center"}}>Select category:</DialogTitle>
                <DialogContent sx={{textAlign: "center"}}>
                    <CategorySelection setSelectedCategories={setSelectedCategories}/>
                    <Button onClick={handleCategorySubmit} 
                        variant="contained" 
                        color="primary" 
                        sx={{ mt: 2 }}
                    >
                        Submit
                    </Button>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default FilterItems;