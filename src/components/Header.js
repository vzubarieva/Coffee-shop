import React from "react";
import coffeeImage from "./../img/coffee-beans.webp";

function Header() {
  return (
    <React.Fragment>
      <h1>Coffee house</h1>;
      <img src={coffeeImage} alt="coffee falling from sack" />
    </React.Fragment>
  );
}

export default Header;
