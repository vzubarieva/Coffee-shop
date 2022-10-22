import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function NewCoffeeForm(props) {
  function handleNewCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onNewCoffeeCreation({
      nameOfCoffee: event.target.nameOfCoffee.value,
      origin: event.target.origin.value,
      price: parseInt(event.target.price.value),
      roast: event.target.roast.value,
      quantity: parseInt(event.target.quantity.value),
      id: v4(),
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewCoffeeFormSubmission}>
        <input type="text" name="nameOfCoffee" placeholder="Coffee name" />
        <input type="text" name="origin" placeholder="Origin" />
        <input type="number" name="price" placeholder="$" />
        <input type="text" name="roast" placeholder="Roast" />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity in burlap sack"
        />
        <button type="submit">Add new coffee</button>
      </form>
    </React.Fragment>
  );
}

NewCoffeeForm.propTypes = {
  onNewCoffeeCreation: PropTypes.func,
};
export default NewCoffeeForm;
