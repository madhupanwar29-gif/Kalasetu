import { useState } from "react";
import api from "../services/api";
import { Link, useNavigate } from "react-router-dom";

const Field = ({
  name,
  label,
  type = "text",
  value,
  error,
  onChange,
  inputClass,
  ...props
}) => (
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
      value={value}
      onChange={onChange}
      className={inputClass(name)}
    />

    {error && (
      <p className="mt-1.5 text-xs font-medium text-red-600">
        {error}
      </p>
    )}
  </div>
);

const PasswordField = ({
  name,
  label,
  value,
  error,
  shown,
  onChange,
  onToggle,
  inputClass,
}) => (
  <div className="min-w-0">
    <label
      htmlFor={name}
      className="mb-1.5 block text-sm font-semibold text-stone-700"
    >
      {label}
    </label>

    <div className="relative">
      <input
        id={name}
        name={name}
        type={shown ? "text" : "password"}
        value={value}
        onChange={onChange}
        autoComplete="current-password"
        className={`${inputClass(name)} pr-16`}
      />

      <button
        type="button"
        onClick={onToggle}
        className="absolute inset-y-0 right-2 my-auto h-8 rounded-lg px-2 text-xs font-bold text-violet-700 hover:bg-violet-100"
      >
        {shown ? "Hide" : "Show"}
      </button>
    </div>

    {error && (
      <p className="mt-1.5 text-xs font-medium text-red-600">
        {error}
      </p>
    )}
  </div>
);

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim())
      newErrors.username = "Username is required";

    if (!formData.password)
      newErrors.password = "Password is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");

    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await api.post("/login", formData);

      setMessage(response.data.message);

      // Redirect to Home
      setTimeout(() => {
    navigate("/home");
     }, 1000);;

      // Example:
      // localStorage.setItem("token", response.data.access_token);

    } catch (error) {
      setMessage(
        error.response
          ? error.response.data.detail
          : "Server Error. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field) =>
    `w-full rounded-xl border bg-stone-50 px-4 py-2.5 text-sm text-stone-800 outline-none transition duration-200 placeholder:text-stone-400 focus:bg-white focus:ring-4 ${
      errors[field]
        ? "border-red-400 focus:border-red-500 focus:ring-red-100"
        : "border-stone-300 hover:border-amber-300 focus:border-violet-500 focus:ring-violet-100"
    }`;

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-orange-50 via-amber-50 to-violet-100 px-4 py-8">

      <section className="grid w-full max-w-6xl overflow-hidden rounded-3xl border-2 border-amber-100 bg-white shadow-[0_20px_55px_rgba(120,53,15,0.15)] lg:grid-cols-2">

        {/* LEFT SIDE */}

        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-orange-500 via-amber-500 to-violet-500 p-12 text-white">

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em]">
            Welcome Back
          </p>

          <h1 className="text-5xl font-extrabold tracking-[0.18em]">
            KALASETU
          </h1>

          <p className="mt-8 text-lg leading-8 text-orange-50">
            Every Skill Deserves Recognition.
          </p>

          <p className="text-lg leading-8 text-orange-50">
            Every Dream Deserves a Chance.
          </p>

          <div className="mt-10 rounded-2xl bg-white/10 p-6 backdrop-blur">
            <h3 className="text-xl font-bold">
              Login to Continue
            </h3>

            <p className="mt-3 text-orange-100 leading-7">
              Access your account, connect with skilled professionals,
              discover services, and continue your journey with KalaSetu.
            </p>
          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="bg-white p-8 md:p-12">

          <header className="mb-8 text-center">

            <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-orange-600">
              Welcome to
            </p>

            <h1 className="text-3xl font-extrabold tracking-[0.18em] text-stone-800 sm:text-4xl">
              KALASETU
            </h1>

            <h2 className="mt-5 text-2xl font-bold text-stone-800">
              Login to your account
            </h2>

            <p className="mt-3 text-sm text-stone-600">
              Enter your credentials to continue.
            </p>

          </header>

          {message && (
            <div className="mb-6 rounded-xl border border-orange-200 bg-orange-50 px-4 py-3 text-center text-sm font-medium text-orange-800">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            <Field
              name="username"
              label="Username"
              value={formData.username}
              error={errors.username}
              onChange={handleChange}
              inputClass={inputClass}
              placeholder="Enter your username"
              autoComplete="username"
            />

            <PasswordField
              name="password"
              label="Password"
              value={formData.password}
              error={errors.password}
              shown={showPassword}
              onChange={handleChange}
              onToggle={() => setShowPassword(!showPassword)}
              inputClass={inputClass}
            />

            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm font-semibold text-violet-700 hover:text-violet-900"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-200 transition hover:from-orange-600 hover:to-red-600 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>

          <p className="mt-6 text-center text-sm text-stone-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-bold text-violet-700 underline decoration-violet-300 underline-offset-4 hover:text-violet-900"
            >
              Sign Up
            </Link>
          </p>

        </div>

      </section>

    </main>
  );
}

export default Login;