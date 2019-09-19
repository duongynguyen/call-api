import React, { Component } from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import { connect } from "react-redux";
import callApi from "../../utils/apiCaller";
import { Link } from "react-router-dom";

class ProductListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    callApi("products", "GET", null).then(res => {
      this.setState({
        products: res.data
      });
    });
  }

  onDelete = id => {
    let { products } = this.state;
    callApi(`products/${id}`, "DELETE", null).then(res => {
      if (res.status === 200) {
        const index = this.findIndex(products, id);
        if (index !== -1) {
          products.splice(index, 1);
          this.setState({
            products: products
          });
        }
      }
    });
  };

  findIndex = (products, id) => {
    let result = -1;
    if (products.length > 0) {
      products.forEach((item, index) => {
        if (item.id === id) {
          result = index;
        }
      });
    }
    return result;
  };

  showProducts = products => {
    let result = null;
    if (products.length > 0) {
      result = products.map((product, index) => (
        <ProductItem
          key={index}
          product={product}
          index={index}
          onDelete={this.onDelete}
        />
      ));
    }
    return result;
  };

  render() {
    const { products } = this.state;
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to="/product/add" className="btn btn-info mb-10">
          Add Product
        </Link>

        <ProductList>{this.showProducts(products)}</ProductList>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(
  mapStateToProps,
  null
)(ProductListPage);
