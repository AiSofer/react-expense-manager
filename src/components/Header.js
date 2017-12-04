import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header>
    <h1>ניהול הוצאות</h1>
    <NavLink to="/dashboard" activeClassName="selected"> ראשי </NavLink>
    <NavLink to="/create" activeClassName="selected"> הוסף </NavLink>
    <button onClick={startLogout}>התנתק</button>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
// we dont need any state so the first is undefined.
