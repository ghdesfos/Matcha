import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <ul>
    <li>
      <Link to="/">Homepage</Link>
    </li>
    <li>
      <Link to="/favorites">Favorites Page</Link>
    </li>
  </ul>
);
