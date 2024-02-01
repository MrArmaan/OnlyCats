import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home";
import CatGrid from "./services/CatApi-CatGrid";
import Guidelines from "./pages/Guidelines";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Catalog" element={<CatGrid />} />
          <Route path="/Guidelines" element={<Guidelines />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
