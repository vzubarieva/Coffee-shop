import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";

function CoffeeList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.coffeeList.map((coffee) => (
        <Coffee
          whenCoffeeClicked={props.onCoffeeSelection}
          nameOfCoffee={coffee.nameOfCoffee}
          origin={coffee.origin}
          price={coffee.price}
          roast={coffee.roast}
          quantity={coffee.quantity}
          id={coffee.id}
          key={coffee.id}
        />
      ))}
    </React.Fragment>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  onCoffeeSelection: PropTypes.func,
};

export default CoffeeList;
