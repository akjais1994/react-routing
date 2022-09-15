import React from 'react';

import { Link, Outlet } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/invoices">Invoices</Link>
          </li>
          <li>
            <Link to="/expenses">Expenses</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;


