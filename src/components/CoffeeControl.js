import React from "react";
import NewCoffeeForm from "./NewCoffeeForm";
import CoffeeList from "./CoffeeList";
import CoffeeDetail from "./CoffeeDetail";
import EditCoffeeForm from "./EditCoffeeForm";
import { Button, Stack } from "@mui/material";

class CoffeeControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCoffeeList: [
        {
          id: "1",
          nameOfCoffee: "Arabica",
          origin: "Ethiopia ",
          price: 5,
          roast: " medium",
          quantity: 130,
        },
        {
          id: "2",
          nameOfCoffee: "Robusta",
          origin: "West Africa",
          price: 9,
          roast: " dark",
          quantity: 130,
        },
      ],
      selectedCoffee: null,
      editing: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    if (this.state.selectedCoffee != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCoffee: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };

  handleAddingNewCoffeeToList = (newCoffee) => {
    const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      formVisibleOnPage: false,
    });
  };

  handleChangingSelectedCoffee = (id) => {
    const selectedCoffee = this.state.mainCoffeeList.filter(
      (coffee) => coffee.id === id
    )[0];
    this.setState({ selectedCoffee: selectedCoffee });
  };

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({ editing: true });
  };

  handleEditingCoffeeInList = (coffeeToEdit) => {
    const editedMainCoffeeList = this.state.mainCoffeeList
      .filter((coffee) => coffee.id !== this.state.selectedCoffee.id)
      .concat(coffeeToEdit);
    this.setState({
      mainCoffeeList: editedMainCoffeeList,
      editing: false,
      selectedCoffee: null,
    });
  };

  handleSellingCoffeeInList = (id) => {
    const coffeeObjIndex = this.state.mainCoffeeList.findIndex(
      (coffee) => coffee.id === id
    );
    const coffeeObj = this.state.mainCoffeeList[coffeeObjIndex];
    const newCoffeeObj = {
      ...coffeeObj,
      quantity: coffeeObj.quantity - 1,
    };
    const editedMainCoffeeList = [...this.state.mainCoffeeList];
    editedMainCoffeeList.splice(coffeeObjIndex, 1, newCoffeeObj);
    console.log("editedMainCoffeeList: ", editedMainCoffeeList);
    // find coffee obj by id in that list
    // get list of coffee other than our id
    // decrement quantity on coffee obj
    // concat filtered list with modified obj
    // set filtered list into state
    this.setState({
      mainCoffeeList: editedMainCoffeeList,
    });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = (
        <EditCoffeeForm
          coffee={this.state.selectedCoffee}
          onEditCoffee={this.handleEditingCoffeeInList}
        />
      );
      buttonText = "Return to coffee list";
    } else if (this.state.selectedCoffee != null) {
      currentlyVisibleState = (
        <CoffeeDetail
          coffee={this.state.selectedCoffee}
          onClickingEdit={this.handleEditClick}
        />
      );
      buttonText = "Return to coffee List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewCoffeeForm onNewCoffeeCreation={this.handleAddingNewCoffeeToList} />
      );
      buttonText = "Return to coffee List";
    } else {
      currentlyVisibleState = (
        <CoffeeList
          coffeeList={this.state.mainCoffeeList}
          onCoffeeSelection={this.handleChangingSelectedCoffee}
          onSellCoffee={this.handleSellingCoffeeInList}
        />
      );
      buttonText = "Add Coffee";
    }
    return (
      <Stack spacing={2}>
        {currentlyVisibleState}
        <Button
          variant="contained"
          sx={{ width: 250 }}
          onClick={this.handleClick}
        >
          {buttonText}
        </Button>
      </Stack>
    );
  }
}

export default CoffeeControl;
