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
import { useState, useEffect } from "react";
import PriceSlider from "../PriceSlider";
import CategorySelection from "../CategorySelection";

const FilterItems = ({ filters, setFilters }) => {
    const [selectedFilter, setSelectedFilter] = useState("Select");
    const [openPrice, setOpenPrice] = useState(false);
    const [openCategory, setOpenCategory] = useState(false);
    const [priceRange, setPriceRange] = useState([0, 100000]);
    const [selectedCategories, setSelectedCategories] = useState([]);

    // sinchronizuoja su pasirinktais filtrais 
    useEffect(() => {
        if (filters.categories) {
            setSelectedCategories(filters.categories);
        }
    }, [filters.categories]);

    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedFilter(value);

        if (value === "Price") {
        setOpenPrice(true);
        }

        if (value === "Category") {
            setOpenCategory(true);
        }

        if (value === "On sale") {
            setFilters((prev) => ({
                ...prev,
                on_sale: true,
            }));

            setTimeout(() => setSelectedFilter("Select"), 0);
        }

        if (value === "Select") {
            setFilters({});
        }
    };

    const handleClose = () => {
        setOpenPrice(false);
        setOpenCategory(false);
        setSelectedFilter("Select");
    };

    const handlePriceSubmit = () => {
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

    // const handleOnSale = () => {
    //     setFilters((prev) => ({
    //         ...prev,
    //         on_sale: !prev.on_sale,
    //     }));
    //     handleClose();
    // };

    return (
        <>
            <FormControl variant="standard" sx={{ width: 170 }}>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Filter by:
                </InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={selectedFilter}
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
                        onClick={handlePriceSubmit} 
                        variant="contained" color="primary" 
                        sx={{ mt: 2 }}
                    >
                        Apply
                    </Button>
                </DialogContent>
            </Dialog>

            <Dialog open={openCategory} onClose={handleClose}>
                <DialogTitle sx={{textAlign: "center"}}>Select category:</DialogTitle>
                <DialogContent sx={{textAlign: "center"}}>
                    <CategorySelection
                        selectedCategories={selectedCategories}
                        setSelectedCategories={setSelectedCategories}
                    />
                    <Button onClick={handleCategorySubmit} 
                        variant="contained" 
                        color="primary" 
                        sx={{ mt: 2 }}
                    >
                        Apply
                    </Button>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default FilterItems;