import React from "react";
import PropTypes from "prop-types";

function Coffee(props) {
  const nameOfCoffee = "Arabica";
  return (
    <React.Fragment>
      <h3>
        {nameOfCoffee} - {origin} - {price} - {roast} - {qantity}
      </h3>
      <hr />
    </React.Fragment>
  );
}

Coffee.propTypes = {
  nameOfCoffee: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.number,
  roast: PropTypes.string,
  quantity: PropTypes.number,
};
export default Coffee;
