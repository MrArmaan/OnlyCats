import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Guidelines from "./pages/Guidelines";
import Checkout from "./pages/Checkout";
import ErrorBoundary from "./pages/ErrorBoundary";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Catalog" element={<Catalog />} />
            <Route path="/Guidelines" element={<Guidelines />} />
            <Route path="/Checkout" element={<Checkout />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </Router>
  );
};

export default App;
