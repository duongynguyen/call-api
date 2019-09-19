import React, { Component } from "react";
import callApi from "../../utils/apiCaller";
import { Link } from "react-router-dom";

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
      callApi(`products/${id}`, "GET", null).then(res => {
        const data = res.data;
        this.setState({
          id: data.id,
          txtName: data.name,
          txtPrice: data.price,
          chkbStatus: data.status
        });
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
    if (id && txtName && txtPrice) {
      callApi(`products/${id}`, "PUT", {
        name: txtName,
        price: txtPrice,
        status: chkbStatus
      }).then(res => {
        history.goBack();
      });
    } else if (txtName && txtPrice) {
      callApi("products", "POST", {
        name: txtName,
        price: txtPrice,
        status: chkbStatus
      }).then(res => {
        history.goBack();
      });
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

export default ProductActionPage;
