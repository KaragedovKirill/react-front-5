import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/taskslist">Tasks List</Link>
    <Link to="/shoppinglist">Shopping List</Link>
  </div>
);

export default Header;
