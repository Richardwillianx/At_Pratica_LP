import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    action: {
      active: "#1a1a1a",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
