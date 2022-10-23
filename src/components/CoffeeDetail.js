import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

function CoffeeDetail(props) {
  const { coffee } = props;

  return (
    <Card>
      <CardContent>
        <Typography color="text.secondary" gutterBottom>
          Coffee type details
        </Typography>
        <Typography variant="h5" component="div">
          {coffee.nameOfCoffee}
        </Typography>
        <Typography>{coffee.origin}</Typography>
        <Typography>{coffee.roast}</Typography>
        <Typography>{coffee.price}</Typography>
        <Typography>{coffee.quantity}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined" onClick={props.onClickingEdit}>
          Update Coffee Type
        </Button>
      </CardActions>
    </Card>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingEdit: PropTypes.func,
};
export default CoffeeDetail;
