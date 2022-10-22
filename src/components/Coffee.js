import React from "react";
import PropTypes from "prop-types";

const mainCoffeeList = [
  {
    nameOfCoffee: "Arabica",
    origin: "Ethiopia ",
    price: 5,
    roast: " medium",
    quantity: 130,
  },
  {
    nameOfCoffee: "Robusta",
    origin: "West Africa",
    price: 9,
    roast: " dark",
    quantity: 130,
  },
];
function Coffee(props) {
  return (
    <React.Fragment>
      <h3>
        {props.nameOfCoffee} - {props.origin} - {props.price} - {props.roast}
        {props.quantity}
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
