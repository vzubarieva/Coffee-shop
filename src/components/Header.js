import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import coffeeImage from "./../img/coffee-beans.webp";

function Header() {
  return (
    <>
      <AppBar position="static">
        <Container fixed>
          <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              Coffee house
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <img
        src={coffeeImage}
        alt="coffee falling from sack"
        style={{
          width: "100%",
          objectFit: "cover",
          height: "300px",
        }}
      />
    </>
  );
}

export default Header;
