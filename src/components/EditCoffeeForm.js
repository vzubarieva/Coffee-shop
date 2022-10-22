import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditCoffeeForm(props) {
  const { coffee } = props;

  function handleEditCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onEditCoffee({
      nameOfCoffee: event.target.nameOfCoffee.value,
      origin: event.target.origin.value,
      price: parseInt(event.target.price.value),
      roast: event.target.roast.value,
      quantity: parseInt(event.target.quantity.value),
      id: coffee.id,
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        onSubmit={handleEditCoffeeFormSubmission}
        buttonText="Update coffee type"
      />
    </React.Fragment>
  );
}

EditCoffeeForm.propTypes = {
  coffee: PropTypes.object,
  onEditCoffee: PropTypes.func,
};
export default EditCoffeeForm;
