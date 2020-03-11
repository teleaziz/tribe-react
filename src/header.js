import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <nav>
            <NavLink exact activeClassName="active" to="/">
                Home
      </NavLink>
            <NavLink activeClassName="active" to="/about">
                About
      </NavLink>
            <NavLink activeClassName="active" to="/services">
                Services
      </NavLink>
            <NavLink activeClassName="active" to="/portfolio">
                Portfolio
      </NavLink>
            <NavLink activeClassName="active" to="/team">
                Team
      </NavLink>
            <NavLink activeClassName="active" to="/contact">
                Contact
      </NavLink>
        </nav>
    );
}
export default Header;