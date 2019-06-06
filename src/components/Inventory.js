import React, { Component } from "react";
import EditSignForm from "./EditFoodForm";

class Inventory extends Component {
  render() {
    return (
      <div className="inventory">
        <h2>Store Inventory</h2>
        {Object.keys(this.props.foods).map(key => (
          <EditSignForm
            key={key}
            index={key}
            food={this.props.foods[key]}
            updateFood={this.props.updateFood}
            deleteFood={this.props.deleteFood}
          />
        ))}
      </div>
    );
  }
}

export default Inventory;
