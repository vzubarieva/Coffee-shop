import React from "react";
import PropTypes from "prop-types";
import { Button, TableCell, TableRow } from "@mui/material";
import { Stack } from "@mui/system";
function Coffee(props) {
  return (
    <TableRow
      key={props.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {props.nameOfCoffee}
      </TableCell>
      <TableCell>{props.origin}</TableCell>
      <TableCell>{props.roast}</TableCell>
      <TableCell align="right">{props.price}</TableCell>
      <TableCell align="right">{props.quantity}</TableCell>
      <TableCell>
        <Stack direction={"row"} spacing={2}>
          <Button
            variant="outlined"
            onClick={() => props.whenCoffeeClicked(props.id)}
          >
            View details
          </Button>
          <Button
            variant="outlined"
            onClick={() => props.onClickingSold(props.id)}
          >
            Sold
          </Button>
        </Stack>
      </TableCell>
    </TableRow>
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
  onClickingSold: PropTypes.func,
};
export default Coffee;
