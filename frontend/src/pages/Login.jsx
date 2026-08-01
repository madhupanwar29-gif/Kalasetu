import { useState } from "react";
import API from "../services/api";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

 const handleLogin = async (e) => {
    e.preventDefault();

    try {

        const response = await API.post("/login", {
            username: username,
            password: password
        });

        console.log(response.data);

    } catch (error) {

        console.log(error);

    }
};

  return (
    <div className="min-h-screen bg-linear-to-br from-stone-100 via-amber-50 to-stone-200 flex items-center justify-center p-6">

      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="hidden md:flex flex-col justify-center bg-linear-to-br from-stone-200 via-amber-100 to-stone-300 p-12">

          <h1 className="text-5xl font-bold text-stone-800">
            KalaSetu
          </h1>

          <p className="mt-6 text-lg leading-8 text-stone-700">
            Connecting skilled artisans and service providers
            with people who appreciate creativity and quality.
          </p>

          <div className="mt-10 text-8xl text-center">
            🎨
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="p-10 md:p-14 flex flex-col justify-center">

          <h2 className="text-3xl font-bold text-stone-800">
            Welcome Back
          </h2>

          <p className="text-stone-600 mt-2 mb-8">
            Login to continue your journey.
          </p>

          <form onSubmit={handleLogin} className="space-y-5">

            <div>
              <label className="block mb-2 text-stone-700 font-medium">
                Username
              </label>

              <input
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-xl border border-stone-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
            </div>

            <div>
              <label className="block mb-2 text-stone-700 font-medium">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-stone-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
            </div>

            <button
              className="w-full bg-amber-700 hover:bg-amber-800 text-white font-semibold py-3 rounded-xl transition duration-300"
            >
              Login
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Login;