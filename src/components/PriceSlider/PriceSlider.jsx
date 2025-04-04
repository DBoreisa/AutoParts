import { Slider, Box, TextField, Grid } from "@mui/material";
import { useState, useEffect } from "react";

export default function PriceSlider({ setPriceRange }) {
  const [value, setValue] = useState([200, 8000]); // Default reiksmes

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (index) => (event) => {
    const newValue = [...value];
    newValue[index] = event.target.value === "" ? "" : Number(event.target.value);
    setValue(newValue);
  };

  const handleBlur = () => {
    const clampedValues = [
      Math.min(Math.max(value[0], 0), 99999), // Nurodo sliderio ribas ( 0 - 99999)
      Math.min(Math.max(value[1], 0), 99999), // Nurodo sliderio ribas
    ];
    setValue(clampedValues);
  };

  // Kai keicias reiksme perduoda parent elementui
  useEffect(() => {
    setPriceRange(value);
  }, [value, setPriceRange]);

  return (
    <Box sx={{ width: 400, paddingTop: "30px" }}>
      <Grid container spacing={2} alignItems="center">
        {/* Left input */}
        <Grid item>
          <TextField
            value={value[0]}
            onChange={handleInputChange(0)}
            onBlur={handleBlur}
            inputProps={{ min: 0, max: 99999 }}
            size="small"
            sx={{ width: 90 }}
          />
        </Grid>

        {/* Slider */}
        <Grid item xs>
          <Slider
            value={value}
            onChange={handleSliderChange}
            valueLabelDisplay="auto"
            min={0}
            max={99999}
            disableSwap
          />
        </Grid>

        {/* Right input */}
        <Grid item>
          <TextField 
            value={value[1]}
            onChange={handleInputChange(1)}
            onBlur={handleBlur}
            inputProps={{ min: 0, max: 99999 }}
            size="small"
            sx={{ width: 90 }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};