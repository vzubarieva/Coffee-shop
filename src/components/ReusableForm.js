import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.onSubmit}>
        <input type="text" name="nameOfCoffee" placeholder="Coffee name" />
        <input type="text" name="origin" placeholder="Origin" />
        <input type="number" name="price" placeholder="$" min="0" />
        <input type="text" name="roast" placeholder="Roast" />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity in burlap sack"
          min="0"
          max="130"
        />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}
ReusableForm.propTypes = {
  onSubmit: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
