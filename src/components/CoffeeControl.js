import React from "react";
import NewCoffeeForm from "./NewCoffeeForm";
import CoffeeList from "./CoffeeList";
import CoffeeDetail from "./CoffeeDetail";
import EditCoffeeForm from "./EditCoffeeForm";

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
        />
      );
      buttonText = "Add Coffee";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default CoffeeControl;
