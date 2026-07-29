import { Link } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";

const Field = ({ name, label, type = "text", value, error, onChange, inputClass, ...props }) => (
    <div className="min-w-0">
        <label
            htmlFor={name}
            className="mb-1.5 block text-sm font-semibold text-stone-700"
        >
            {label}
        </label>

        <input
            {...props}
            id={name}
            name={name}
            type={type}
            className={inputClass(name)}
            value={value}
            onChange={onChange}
        />

        {error && (
            <p className="mt-1.5 text-xs font-medium text-red-600">
                {error}
            </p>
        )}
    </div>
);

const PasswordField = ({ name, label, value, error, shown, onChange, onToggle, inputClass }) => (
    <div className="min-w-0">
        <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-stone-700">{label}</label>
        <div className="relative">
            <input
                id={name}
                name={name}
                type={shown ? "text" : "password"}
                value={value}
                onChange={onChange}
                autoComplete="new-password"
                className={`${inputClass(name)} pr-16`}
            />
            <button
                type="button"
                onClick={onToggle}
                aria-label={`${shown ? "Hide" : "Show"} ${label}`}
                className="absolute inset-y-0 right-2 my-auto h-8 rounded-lg px-2 text-xs font-bold text-violet-700 transition hover:bg-violet-100 focus:outline-none focus:ring-2 focus:ring-violet-400"
            >
                {shown ? "Hide" : "Show"}
            </button>
        </div>
        {error && <p className="mt-1.5 text-xs font-medium text-red-600" role="alert">{error}</p>}
    </div>
);

function Signup() {
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        confirm_password: ""
    });
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Full Name is required";
        else if (!/^[A-Za-z ]+$/.test(formData.name)) newErrors.name = "Only letters and spaces are allowed";

        if (!formData.username.trim()) newErrors.username = "Username is required";
        else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) newErrors.username = "Username can contain only letters, numbers and underscore";

        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) newErrors.email = "Enter a valid email";

        if (!formData.phone.trim()) newErrors.phone = "Phone Number is required";
        else if (!/^[0-9]{10}$/.test(formData.phone)) newErrors.phone = "Phone Number must contain exactly 10 digits";

        if (!formData.password) newErrors.password = "Password is required";
        else if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters";

        if (!formData.confirm_password) newErrors.confirm_password = "Please confirm your password";
        else if (formData.password !== formData.confirm_password) newErrors.confirm_password = "Passwords do not match";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        if (!validateForm()) return;
        setLoading(true);

        try {
            const response = await api.post("/signup", formData);
            setMessage(response.data.message);
            setFormData({ name: "", username: "", email: "", phone: "", password: "", confirm_password: "" });
        } catch (error) {
            setMessage(error.response ? error.response.data.detail : "Server Error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const inputClass = (field) => `w-full rounded-xl border bg-stone-50 px-4 py-2.5 text-sm text-stone-800 outline-none transition duration-200 placeholder:text-stone-400 focus:bg-white focus:ring-4 ${
        errors[field]
            ? "border-red-400 focus:border-red-500 focus:ring-red-100"
            : "border-stone-300 hover:border-amber-300 focus:border-violet-500 focus:ring-violet-100"
    }`;

    return (
        <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-orange-50 via-amber-50 to-violet-100 px-4 py-8 sm:px-6">
            <section className="w-full max-w-2xl rounded-3xl border-2 border-amber-100 bg-white/95 p-6 shadow-[0_20px_55px_rgba(120,53,15,0.15)] backdrop-blur-sm md:p-8">
                <header className="mb-6 text-center">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-orange-600">Welcome to</p>
                    <h1 className="text-3xl font-extrabold tracking-[0.18em] text-stone-800 sm:text-4xl">KALASETU</h1>
                    <p className="mt-3 text-sm leading-6 text-stone-600">Every Skill Deserves Recognition. Every Dream Deserves a Chance.</p>
                    <h2 className="mt-5 text-2xl font-bold text-stone-800">Create your account</h2>
                </header>

                {message && (
                    <div className="mb-5 rounded-xl border border-orange-200 bg-orange-50 px-4 py-3 text-center text-sm font-medium text-orange-800" role="status">
                        {message}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-x-5 gap-y-4 md:grid-cols-2">
                        <Field name="name" label="Full Name" value={formData.name} error={errors.name} onChange={handleChange} inputClass={inputClass} placeholder="Your full name" autoComplete="name" />
                        <Field name="username" label="Username" value={formData.username} error={errors.username} onChange={handleChange} inputClass={inputClass} placeholder="Choose a username" autoComplete="username" />
                        <Field name="email" label="Email Address" type="email" value={formData.email} error={errors.email} onChange={handleChange} inputClass={inputClass} placeholder="you@example.com" autoComplete="email" />
                        <Field name="phone" label="Phone Number" type="tel" value={formData.phone} error={errors.phone} onChange={handleChange} inputClass={inputClass} placeholder="10-digit mobile number" autoComplete="tel" inputMode="numeric" />
                        <PasswordField name="password" label="Password" value={formData.password} error={errors.password} onChange={handleChange} inputClass={inputClass} shown={showPassword} onToggle={() => setShowPassword(!showPassword)} />
                        <PasswordField name="confirm_password" label="Confirm Password" value={formData.confirm_password} error={errors.confirm_password} onChange={handleChange} inputClass={inputClass} shown={showConfirmPassword} onToggle={() => setShowConfirmPassword(!showConfirmPassword)} />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-200 transition duration-200 hover:from-orange-600 hover:to-red-600 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-orange-200 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {loading ? "Creating Account..." : "Create Account"}
                    </button>
                </form>

                <p className="mt-5 text-center text-sm text-stone-600">
                    Already have an account? <Link to="/login" className="font-bold text-violet-700 underline decoration-violet-300 underline-offset-4 transition hover:text-violet-900">Log in</Link>
                </p>
            </section>
        </main>
    );
}

export default Signup;
