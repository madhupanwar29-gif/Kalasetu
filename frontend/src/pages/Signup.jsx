import { Link } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";
import "../styles/signup.css";

function Signup() {

    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        confirm_password: ""
    });

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setMessage("");

        // Frontend Validation
        if (
            !formData.name ||
            !formData.username ||
            !formData.email ||
            !formData.phone ||
            !formData.password ||
            !formData.confirm_password
        ) {
            setMessage("Please fill all the fields.");
            return;
        }

        if (formData.password !== formData.confirm_password) {
            setMessage("Passwords do not match.");
            return;
        }

        setLoading(true);

        try {

            const response = await api.post("/signup", formData);

            setMessage(response.data.message);

            setFormData({
                name: "",
                username: "",
                email: "",
                phone: "",
                password: "",
                confirm_password: ""
            });

        } catch (error) {

            if (error.response) {
                setMessage(error.response.data.detail);
            } else {
                setMessage("Server Error. Please try again.");
            }

        } finally {
            setLoading(false);
        }
    };

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

                <h2>Create Your Account</h2>

                {message && (
                    <div className="message">
                        {message}
                    </div>
                )}

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        name="confirm_password"
                        placeholder="Confirm Password"
                        value={formData.confirm_password}
                        onChange={handleChange}
                    />

                    <button
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Creating Account..." : "Create Account"}
                    </button>

                </form>

                <p className="login-link">
    Already have an account?

    <Link to="/login">
        <span> Login</span>
    </Link>

</p>

            </div>

        </div>
    );
}

export default Signup;