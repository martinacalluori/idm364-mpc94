import React, { Component } from "react";

class EditFoodForm extends Component {
  handleChange = event => {
    console.log(event.currentTarget.value);
    console.log(event.currentTarget.name);

    const updatedFood = {
      ...this.props.food,
      [event.currentTarget.name]: event.currentTarget.value
    };

    console.log(updatedFood);
    this.props.updateFood(this.props.index, updatedFood);
  };

  render() {
    return (
      <div className="food-edit">
        <div className="controlgroup">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            value={this.props.food.name}
            onChange={this.handleChange}
          />
        </div>
        <div className="controlgroup">
          <label htmlFor="status">Stock</label>
          <select
            name="status"
            onChange={this.handleChange}
            value={this.props.food.status}
          >
            <option value="active">In Stock</option>
            <option value="inactive">Out of Stock</option>
          </select>
        </div>
        <div className="controlgroup">
          <textarea
            name="desc"
            onChange={this.handleChange}
            value={this.props.food.desc}
          />
        </div>
        <div className="controlgroup">
          <label htmlFor="price">Price: </label>
          <input
            type="text"
            name="price"
            value={this.props.food.price}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default EditFoodForm;
