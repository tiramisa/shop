import React, { Component } from "react";
import { FaTrash } from "react-icons/fa";
export class Order extends Component {
  render() {
    return (
      <div className="item">
        <img width={360} height={350} src={"./img/" + this.props.item.img} />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.price}$</p>
        <FaTrash className="delete-icon" />
      </div>
    );
  }
}

export default Order;
