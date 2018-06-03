import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";

class HeaderLinks extends Component {
  render() {
    const notification = (
      <div>
        <i className="fa fa-globe" />
        <b className="caret" />
        <span className="notification">2</span>
        <p className="hidden-lg hidden-md">Notification</p>
      </div>
    );
    return (
      <div>
        <Nav>
          <NavDropdown
            eventKey={2}
            title={notification}
            noCaret
            id="basic-nav-dropdown"
          >
            <MenuItem eventKey={2.1}>Відсутні показники напруги</MenuItem>
            <MenuItem eventKey={2.2}>Відсутні показники струму</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#station">
            Параметри станції
          </NavItem>
          <NavDropdown
            eventKey={2}
            title="Налаштування"
            id="basic-nav-dropdown-right"
          >
            <MenuItem eventKey={2.1} onClick={() => window.location.reload()}>Перевантажити сторінку</MenuItem>
          </NavDropdown>
        </Nav>
      </div>
    );
  }
}

export default HeaderLinks;
