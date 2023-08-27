import { Link } from "react";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
        <Link to="/">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
