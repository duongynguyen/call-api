import React, { Component } from 'react';

class ProductItem extends Component {
  render() {
    return (
      <tr>
        <td>1</td>
        <td>1</td>
        <td>iPhone</td>
        <td>500</td>
        <td>
          <span className="label label-warning">Still</span>
        </td>
        <td>
          <button type="button" className="btn btn-primary mr-10">Edit</button>
          <button type="button" className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;