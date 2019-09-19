import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProductItem extends Component {
  onClick = id => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Do you want to delete this product?")) {
      this.props.onDelete(id);
    }
  };

  render() {
    const { product, index } = this.props;
    const statusName = product.status ? "Sitll" : "Sold";
    const statusClass = product.status ? "primary" : "warning";
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <span className={`label label-${statusClass}`}>{statusName}</span>
        </td>
        <td>
          <Link to={`/product/edit/${product.id}`} className="btn btn-primary mr-10">
            Edit
          </Link>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.onClick(product.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
