import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
    return (
        <BrowserRouter>

            <Routes>

                

                <Route path="/login" element={<Login />} />

               
                <Route
                    path="/"
                    element={<LandingPage />}
                />

                <Route
                    path="/signup"
                    element={<Signup />}
                />

                

                <Route path="/home" element={<Home />} />

            </Routes>

        </BrowserRouter>
    );
}

export default App;