import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>ניהול הוצאות</h1>
    <NavLink to="/" activeClassName="selected" exact={true}> ראשי </NavLink>
    <NavLink to="/create" activeClassName="selected"> הוסף </NavLink>
    <NavLink to="/help" activeClassName="selected"> עזרה </NavLink>
  </header>
);

export default Header;
