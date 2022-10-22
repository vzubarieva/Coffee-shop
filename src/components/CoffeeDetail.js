import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props) {
  const { coffee } = props;

  return (
    <React.Fragment>
      <h1>Coffee type details</h1>
      <h3>
        {coffee.nameOfCoffee} - {coffee.origin} - {coffee.price} -{coffee.roast}
        {coffee.quantity}
      </h3>
      <hr />
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
};
export default CoffeeDetail;
