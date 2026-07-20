import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">

            <div className="logo">
                KALASETU
            </div>

            <ul className="nav-links">

                <li>
                    <a href="#">Home</a>
                </li>

                <li>
                    <a href="#">Services</a>
                </li>

                <li>
                    <a href="#">Categories</a>
                </li>

                <li>
                    <a href="#">About</a>
                </li>

            </ul>

            <div className="nav-buttons">

    <Link to="/login">
        <button className="login-btn">
            Login
        </button>
    </Link>

    <Link to="/signup">
        <button className="signup-btn">
            Sign Up
        </button>
    </Link>

</div>

        </nav>
    );
}

export default Navbar; 