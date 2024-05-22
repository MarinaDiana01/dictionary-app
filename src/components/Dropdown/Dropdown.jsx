import "./Dropdown.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Dropdown = (props) => {
  const [fontFamily, setFontFamily] = React.useState("serif");

  const handleChange = (event) => {
    const newFontFamily = event.target.value;
    setFontFamily(newFontFamily);
    document.documentElement.style.setProperty(
      "--global-font-family",
      newFontFamily
    );
  };

  return (
    <FormControl className="navbar-dropdown-container">
      <Select
        className="navbar-dropdown"
        value={fontFamily}
        onChange={handleChange}
        IconComponent={ExpandMoreIcon}
        sx={{
          "& .MuiSelect-select": {
            fontFamily,
            fontWeight: "bold",
            fontSize: "15px",
            color: props.isSwitchOn === true ? "var(--white)" : "",
          },
          "& .MuiSelect-icon": {
            color: "var(--mediumPurple)",
            fontSize: "26px",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "& .MuiInputBase-input": {
            padding: "2px",
          },
        }}
      >
        <MenuItem
          value="serif"
          sx={{ fontFamily: "serif", fontWeight: "bold" }}
          className="navbar-dropdown-item"
        >
          Serif
        </MenuItem>
        <MenuItem
          value="sans-serif"
          sx={{ fontFamily: "sans-serif", fontWeight: "bold" }}
          className="navbar-dropdown-item"
        >
          Sans Serif
        </MenuItem>
        <MenuItem
          value="monospace"
          sx={{ fontFamily: "monospace", fontWeight: "bold" }}
          className="navbar-dropdown-item"
        >
          Mono
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default Dropdown;
