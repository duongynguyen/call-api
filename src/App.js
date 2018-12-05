import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-default">
          <a className="navbar-brand">CALL API</a>
          <ul className="nav navbar-nav">
            <li className="active">
              <a>Home</a>
            </li>
            <li>
              <a>Products Managerment</a>
            </li>
          </ul>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xs-3 col-sm-3 col-md-12 col-lg-12">

              <button type="button" className="btn btn-info mb-10">Add Product</button>

              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">List of Product</h3>
                </div>
                <div className="panel-body">
                  <table className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>No.</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
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
                      <tr>
                        <td>2</td>
                        <td>2</td>
                        <td>Samsung</td>
                        <td>600</td>
                        <td>
                          <span className="label label-warning">Sold out</span>
                        </td>
                        <td>
                          <button type="button" className="btn btn-primary mr-10">Edit</button>
                          <button type="button" className="btn btn-danger">Delete</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
