import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
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
      <ReusableForm
        onSubmit={handleNewCoffeeFormSubmission}
        buttonText="Add new coffee type"
      />
    </React.Fragment>
  );
}

NewCoffeeForm.propTypes = {
  onNewCoffeeCreation: PropTypes.func,
};
export default NewCoffeeForm;
