import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Guidelines from "./pages/Guidelines";
import Checkout from "./pages/Checkout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Catalog" element={<Catalog />} />
          <Route path="/Guidelines" element={<Guidelines />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;