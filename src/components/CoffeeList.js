import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function CoffeeList(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Coffee bean</TableCell>
            <TableCell>Origin</TableCell>
            <TableCell>Roast</TableCell>
            <TableCell align="right">Price $</TableCell>
            <TableCell align="right">Quantity(pounds)</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.coffeeList.map((coffee) => (
            <Coffee
              whenCoffeeClicked={props.onCoffeeSelection}
              onClickingSold={props.onSellCoffee}
              nameOfCoffee={coffee.nameOfCoffee}
              origin={coffee.origin}
              price={coffee.price}
              roast={coffee.roast}
              quantity={coffee.quantity}
              id={coffee.id}
              key={coffee.id}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  onCoffeeSelection: PropTypes.func,
  onSellCoffee: PropTypes.func,
};

export default CoffeeList;
