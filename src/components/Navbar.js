
import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div style={{ border: "solid", padding: "10px" }}>
      <Link to="/">Home</Link>{" "}
      <Link to="/client">Client</Link>{" "}
      <Link to="/contractor">Contractor</Link>{" "}
      <Link to="/listings">View Listings</Link>{" "}
      <Link to="/searchcontractors">Find Contractors</Link>
    </div>
  );
};
export default Navbar;
