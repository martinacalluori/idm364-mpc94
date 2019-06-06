import React, { Component } from "react";
import Button from "./Button";
import Food from "./Food";
import foods from "../js/foods.js";
import Inventory from "./Inventory";
import base from "../js/base";

class App extends Component {
  state = {
    foods: []
  };

  componentDidMount() {
    this.ref = base.syncState("foods", {
      // Firebase needs a couple pieces of info
      context: this,
      state: "foods"
    });
  }

  loadFoods = () => {
    this.setState({ foods });
  };

  updateFood = (key, updatedFood) => {
    const foods = { ...this.state.foods };
    foods[key] = updatedFood;
    this.setState({ signs: foods });
    this.setState({ foods });
  };

  deleteFood = () => {
    console.log("delete Food");
  };

  render() {
    return (
      <>
        <div className="app">
          <ul className="foods">
            <div className="itemContainer">
              {Object.keys(this.state.foods).map(key => (
                <Food key={key} details={this.state.foods[key]} />
              ))}
            </div>
          </ul>

          <section className="admin">
            <Button loadFoods={this.loadFoods} />
            <Inventory
              updateFood={this.updateFood}
              deleteFood={this.deleteFood}
              foods={this.state.foods}
            />
          </section>
        </div>
      </>
    );
  }
}

export default App;
