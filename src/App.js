import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import Buy from "./pages/Buy";
import Contacts from "./pages/Contacts"; */
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./index.css";

function App() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" exact element={<Home />} />
                {/* <Route path="/AboutUs" exact element={<AboutUs />} />
                <Route path="/contacts" exact element={<Contacts />} />
                <Route path="/Buy" exact element={<Buy />} />
                <Route path="/Blog" exact element={<Blog />} />
                <Route path="/AboutUs" exact element={<AboutUs />} /> */}
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
