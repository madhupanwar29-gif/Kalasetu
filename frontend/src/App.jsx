import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home"; 
import AboutUs from "./pages/AboutUs";

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

                <Route
                   path="/about"
                   element={<AboutUs />}
                    />

            </Routes>

        </BrowserRouter>
    );
}

export default App;