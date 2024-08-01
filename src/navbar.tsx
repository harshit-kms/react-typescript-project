import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Heroes</h1>
      <div className="links">
        <Link to="/">Dashboard</Link>
        <Link to="/heroes" style={{
          color: "white",
          backgroundColor: '#f1356d',
          borderRadius: '8px'
        }}>Heroes</Link>
      </div>
    </nav>
  );
}

export default Navbar;
