import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import { useNavigate, useLocation } from "react-router-dom";
import { useSearch } from "../../contexts/SearchContext";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius * 6,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  display: "flex",
  alignItems: "center",
  width: "auto",
  transition: theme.transitions.create("width"),
}));

const SearchIconWrapper = styled(Box)({
  padding: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
});

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "0",
  opacity: 0,
  transition: theme.transitions.create(["width", "opacity"], {
    duration: theme.transitions.duration.short,
  }),
  "&.open": {
    width: "20ch",
    opacity: 1,
  },
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(2)})`,
  },
}));

const SearchItem = () => {
    const [open, setOpen] = useState(false);
    const { searchQuery, setSearchQuery } = useSearch();
    const navigate = useNavigate();
    const location = useLocation();

    const handleChange = (e) => {
      const newValue = e.target.value;
      setSearchQuery(newValue); 
      if (newValue.trim() !== "" && location.pathname !== "/catalog") {
        navigate(`/catalog`);
      }
    };

    const handleClose = () => {
      setOpen(false);
      //setSearchQuery(""); // isvalo input po uzdarymo
    };

    return (
        <Search>
        <SearchIconWrapper onClick={() => setOpen(true)}>
            <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
            className={open ? "open" : ""}
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            onBlur={handleClose} 
            autoFocus={open}
            value={searchQuery}
            onChange={handleChange}
        />
        </Search>
    );
};

export default SearchItem;
