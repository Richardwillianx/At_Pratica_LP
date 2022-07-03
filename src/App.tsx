import React, { useState } from "react";
import Router from "./Routers";
import GlobalStyles from "./config/styles/GlobalStyles";
import { Button, ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./config/styles/themes/Default";

function App() {
  const [theme, setTheme] = useState(darkTheme);

  function changeTheme() {
    if (theme !== darkTheme) {
      setTheme(darkTheme);
      return;
    }

    setTheme(lightTheme);
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button onClick={changeTheme} sx={{ position: "absolute" }}>
          Change Theme
        </Button>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
