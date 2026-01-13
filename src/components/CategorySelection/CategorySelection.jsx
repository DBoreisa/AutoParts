import { Box, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { useState, useEffect } from "react";
//import { useNavigate } from "react-router-dom";

const CategorySelection = ({ setSelectedCategories }) => {
    const [selected, setSelected] = useState({});
    const [categories, setCategories] = useState([]);
    //const navigate = useNavigate();

    useEffect(() => {
        fetch("https://api.gearpro01e.com/categories/") 
            .then((res) => res.json())
            .then((data) => {
                setCategories(data); 
                // initialize state
                const initSelected = {};
                data.forEach((cat) => {
                    initSelected[cat.value] = false; // use .value here
                });
                setSelected(initSelected);
            })
            .catch(err => console.error("Error fetching categories:", err));
    }, []);

    const handleChange = (categoryValue) => (event) => {
        const updated = { ...selected, [categoryValue]: event.target.checked };
        setSelected(updated);

        const selectedCats = Object.keys(updated).filter((key) => updated[key]);
        setSelectedCategories(selectedCats);

        // if (onChange) {
        //     onChange(selectedCats); // callback to NavBar
        // }
        // const params = new URLSearchParams();
        // selectedCats.forEach(cat => params.append("categories", cat));
        // navigate(`/catalog?${params.toString()}`);
    };

    return (
        <Box sx={{ paddingTop: "20px" }}>
            <FormGroup>
                {categories.map((category, index) => (
                    <FormControlLabel
                        key={category.value}
                        control={
                            <Checkbox
                                checked={!!selected[category.value]}
                                onChange={handleChange(category.value)}
                            />
                        }
                        label={category.label}   // use label for UI
                    />
                ))}
            </FormGroup>
        </Box>
    );
};

export default CategorySelection;
