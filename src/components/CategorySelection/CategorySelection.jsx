import { Box, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { useState, useEffect } from "react";

const CategorySelection = ({ setSelectedCategories }) => {
    const [selected, setSelected] = useState({});
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://api.gearpro01e.com/categories/") 
        .then((res) => res.json())
        .then((data) => {
            setCategories(data);
            // Initialize selected state
            const initSelected = {};
            data.forEach((cat) => {
            initSelected[cat] = false;
            });
            setSelected(initSelected);
        })
        .catch(err => console.error("Error fetching categories:", err));
    }, []);

    const handleChange = (category) => (event) => {
        const updated = { ...selected, [category]: event.target.checked };
        setSelected(updated);
        const selectedCats = Object.keys(updated).filter((key) => updated[key]);
        setSelectedCategories(selectedCats);
    };

    return (
        <Box sx={{ paddingTop: "20px" }}>
            <FormGroup>
                {categories.map((category, index) => (
                    <FormControlLabel
                        key={`${category}-${index}`}   // ensures unique key
                        control={
                        <Checkbox
                            checked={!!selected[category]}
                            onChange={handleChange(category)}
                        />
                        }
                        label={category}  
                    />
                    ))}
            </FormGroup>
        </Box>
    );
};

export default CategorySelection;