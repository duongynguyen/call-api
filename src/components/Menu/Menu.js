import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
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
    );
  }
}

export default Menu;