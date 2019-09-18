import React, { Component } from "react";

class ProductActionPage extends Component {
  render() {
    return (
      <div className="container">
        <div class="row">
          <div class="col-md-6">
            <form>
              <div class="form-group">
                <label>Name product:</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Name product"
                />
              </div>
              <div class="form-group">
                <label>Price:</label>
                <input type="number" class="form-control" placeholder={0} />
              </div>
              <div class="form-group">
                <label>Status:</label>
              </div>
              <div class="checkbox">
                <label>
                  <input type="checkbox" /> Still
                </label>
              </div>
              <button type="submit" class="btn btn-primary">
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
