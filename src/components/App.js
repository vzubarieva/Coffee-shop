import React from "react";
import Header from "./Header";
import CoffeeControl from "./CoffeeControl";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../theme";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Header />
        <Container fixed sx={{ mt: 2 }}>
          <CoffeeControl />
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
