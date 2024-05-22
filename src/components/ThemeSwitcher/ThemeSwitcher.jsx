import * as React from "react";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

const ThemeSwitcher = styled(({ isSwitchOn, setIsSwitchOn, ...other }) => (
  <Switch
    focusVisibleClassName=".Mui-focusVisible"
    disableRipple
    checked={isSwitchOn}
    onChange={() => setIsSwitchOn(!isSwitchOn)}
    {...other}
  />
))(({ theme }) => ({
  width: 42,
  height: 26,
  marginLeft: 16,
  padding: 0,
  display: "flex",
  alignItems: "center",
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: "3px 5px",
    transitionDuration: "300ms",
    height: "calc(100% - 6px)",
    display: "flex",
    alignItems: "center",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#9C4BE2",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 14,
    height: 14,
  },
  "& .MuiSwitch-track": {
    height: 20,
    width: 40,
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#808080" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export default ThemeSwitcher;
