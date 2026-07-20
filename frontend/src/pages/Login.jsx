import { Link } from "react-router-dom";
import "../styles/signup.css";

function Login() {
    return (
        <div className="signup-container">

            <div className="signup-card">

                <h1 className="logo">
                    KALASETU
                </h1>

                <p className="tagline">
                    Every Skill Deserves Recognition.
                    <br />
                    Every Dream Deserves a Chance.
                </p>

                <h2>Login</h2>

                <p
                    style={{
                        color: "#6B5A4B",
                        marginBottom: "25px",
                        lineHeight: "1.6"
                    }}
                >
                    Login functionality will be available soon.
                </p>

                <button
                    className="signup-btn"
                    style={{ width: "100%" }}
                >
                    Coming Soon
                </button>

                <p className="login-link">
                    Don't have an account?

                    <Link to="/signup">
                        <span> Sign Up</span>
                    </Link>
                </p>

            </div>

        </div>
    );
}

export default Login;