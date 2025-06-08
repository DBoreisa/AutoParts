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
import { useSearch } from "../../contexts/SearchContext";

const FilterItems = ({ products, setFilteredProducts }) => {
    const [isSelected, setIsSelected] = useState("Select");
    const [open, setOpen] = useState(false);
    const [priceRange, setPriceRange] = useState([0, 100000]);
    const { searchQuery } = useSearch();

    const handleChange = (event) => {
        const value = event.target.value;
        setIsSelected(value);

        if (value === "Price") {
            setOpen(true); 
        };
        if (value === "Select") {
            setPriceRange([0, 100000]); 
            setFilteredProducts(products)
        };
    };

    const handleClose = () => {
        setOpen(false);
        setIsSelected("Select");
    };

    const filterFunc = () => {
        const [lowest, highest] = priceRange;
        const filteredProducts = products.filter(product => 
            product.price >= lowest && product.price <= highest
        );

        setFilteredProducts(filteredProducts);
    };

    useEffect(() => {
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setFilteredProducts(filteredProducts);
    }, [searchQuery, products])

    // Kai paspaudzia submit
    const handleFilterSubmit = () => {
        filterFunc();
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
                </Select>          
            </FormControl>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle sx={{textAlign: "center"}}>Price Range:</DialogTitle>
                <DialogContent sx={{textAlign: "center"}}>
                    <PriceSlider setPriceRange={setPriceRange}/>
                    <Button onClick={handleFilterSubmit} variant="contained" color="primary" sx={{ mt: 2 }}>Submit</Button>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default FilterItems;