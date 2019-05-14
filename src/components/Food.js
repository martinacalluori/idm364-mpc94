import React, { Component } from "react";

class Food extends Component {
  render() {
    const { image, name, desc, status, price } = this.props.details;
    return (
      <li key="this.props.key" className={status}>
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p>{desc}</p>
        <p>{price}</p>
      </li>
    );
  }
}

export default Food;
