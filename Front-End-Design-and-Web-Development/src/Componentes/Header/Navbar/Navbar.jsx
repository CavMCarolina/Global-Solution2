import { Link } from "react-router-dom";

export default function Navbar() {
    return (
      <nav>
        <h1>Navbar</h1>
        <Link to='/BlueWatch' >HOME</Link>
      </nav>
    );
  }