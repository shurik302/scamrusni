import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Refill from "./pages/Refill";
import Contactus from "./pages/Contactus";
import AtomicHeart from "./pages/Games/AtomicHeart";
import Callofdutymw2 from "./pages/Games/Callofdutymw2";
import "./index.css";

function App() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/Refill" exact element={<Refill />} />
                <Route path="/Contactus" exact element={<Contactus />} />
                <Route path="/AtomicHeart" exact element={<AtomicHeart />} />
                <Route
                    path="/Callofdutymw2"
                    exact
                    element={<Callofdutymw2 />}
                />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
