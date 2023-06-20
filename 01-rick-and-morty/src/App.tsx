import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import Router from "./routes/Router";
import darkTheme from "./themes/darkTheme";
import "./App.css"
import { FavoritesProvider } from "./context/FavoritesContext";

function App() {
  return (
    <FavoritesProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </FavoritesProvider>
  );
}

export default App;
