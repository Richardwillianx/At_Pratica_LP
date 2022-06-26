import { useTheme } from "@mui/material";
import GlobalStyles from "@mui/material/GlobalStyles";

export default function StylesGlobal() {
  const theme = useTheme();
  return (
    <GlobalStyles
      styles={{
        a: {
          textDecoration: "none",
        },
        body: {
          margin: 20,
          padding: 0,
          backgroundColor: theme.palette.background.default,
        },
      }}
    />
  );
}
