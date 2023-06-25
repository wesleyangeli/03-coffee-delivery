import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../themes/default";
import { Router } from "./Router";
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}
