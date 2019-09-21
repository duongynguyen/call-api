import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  actAddProductRequest,
  actGetProductRequest,
  actUpdateProductRequest
} from "../../actions";
import { connect } from "react-redux";

class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtPrice: "0",
      chkbStatus: false
    };
  }

  componentDidMount() {
    const { match } = this.props;
    if (match) {
      const id = match.params.id;
      this.props.onGetProduct(id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEditing) {
      const { itemEditing } = nextProps;
      this.setState({
        id: itemEditing.id,
        txtName: itemEditing.name,
        txtPrice: itemEditing.price,
        chkbStatus: itemEditing.status
      });
    }
  }

  onChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  };

  onSave = event => {
    event.preventDefault();
    const { id, txtName, txtPrice, chkbStatus } = this.state;
    const { history } = this.props;
    const product = {
      id: id,
      name: txtName,
      price: txtPrice,
      status: chkbStatus
    };
    if (id && txtName && txtPrice) {
      this.props.onUpdateProduct(product);
      history.goBack();
    } else if (txtName && txtPrice) {
      this.props.onAddProduct(product);
      history.goBack();
    }
  };

  render() {
    const { txtName, txtPrice, chkbStatus } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={this.onSave}>
              <div className="form-group">
                <label>Name product:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name product"
                  name="txtName"
                  value={txtName}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>Price:</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder={0}
                  name="txtPrice"
                  value={txtPrice}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>Status:</label>
              </div>
              <div className="checkbox">
                <label>
                  <input
                    type="checkbox"
                    name="chkbStatus"
                    onChange={this.onChange}
                    value={chkbStatus}
                    checked={chkbStatus}
                  />{" "}
                  Still
                </label>
              </div>
              <Link to="/product-list" className="btn btn-success mr-10">
                Back
              </Link>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    itemEditing: state.itemEditing
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddProduct: product => {
      dispatch(actAddProductRequest(product));
    },
    onGetProduct: id => {
      dispatch(actGetProductRequest(id));
    },
    onUpdateProduct: product => {
      dispatch(actUpdateProductRequest(product));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductActionPage);
