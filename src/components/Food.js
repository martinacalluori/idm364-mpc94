import React, { Component } from "react";

class Food extends Component {
  render() {
    const { image, name, desc, status, price } = this.props.details;
    return (
      <li key="this.props.key" className={status}>
        <div className="itemCard">
          <img className="itemImg" src={image} alt={name} />
          <h2 className="itemName">{name}</h2>
          <p className="desc">{desc}</p>
          <p className="price">{price}</p>
        </div>
        <button type="button" value={this.props.index} onClick={this.addToCart}>
          {" "}
          add to cart
        </button>
      </li>
    );
  }
}

export default Food;
