import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

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

            </Routes>

        </BrowserRouter>
    );
}

export default App;