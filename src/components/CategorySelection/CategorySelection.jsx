import { Box, FormGroup, FormControlLabel, Checkbox, Button } from "@mui/material";
import { useState, useEffect } from "react";

const CategorySelection = ({ selectedCategories = [], setSelectedCategories, onChange, readOnly = false }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://api.gearpro01e.com/categories/")
            .then((res) => res.json())
            .then(setCategories)
            .catch(console.error);
    }, []);

    // checkbox 
    const handleChange = (catValue) => (event) => {
        const updated = event.target.checked
            ? [...selectedCategories, catValue]
            : selectedCategories.filter((v) => v !== catValue);

        setSelectedCategories(updated);  
    };

    // drawer / readOnly 
    const handleClick = (catValue) => {
        onChange?.([catValue]); // 
    };

    return (
        <Box>
            <FormGroup>
                {categories.map((cat) => (
                    readOnly ? (
                        <Button
                            key={cat.value}
                            variant="text"
                            onClick={() => handleClick(cat.value)} 
                            sx={{ justifyContent: "flex-start", width: "100%", color: "text.primary" }}
                        >
                            • {cat.label}
                        </Button>
                    ) : (
                        <FormControlLabel
                            key={cat.value}
                            control={
                                <Checkbox
                                    checked={selectedCategories.includes(cat.value)}
                                    onChange={handleChange(cat.value)}
                                />
                            }
                            label={cat.label}
                        />
                    )  
                ))}
            </FormGroup>
        </Box>
    );
};

export default CategorySelection;
