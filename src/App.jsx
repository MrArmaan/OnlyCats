import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home";
import CatGrid from "./services/CatApi-CatGrid.jsx";
import Guidelines from "./pages/Guidelines";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Home />
        <Routes>
          <Route path="/pages/Home" component={Home} />
          <Route path="/pages/Catalog" component={CatGrid} />
          <Route path="/pages/Guidelines" component={Guidelines} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
