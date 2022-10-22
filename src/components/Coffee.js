import React from "react";
import PropTypes from "prop-types";
function Coffee(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenCoffeeClicked(props.id)}>
        <h3>
          {props.nameOfCoffee} - {props.origin} - {props.price} - {props.roast}
          {props.quantity}
        </h3>
        button
        <hr />
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  nameOfCoffee: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.number,
  roast: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func,
};
export default Coffee;
