import "./styles/App.css";
import  CatGrid from "./services/CatApi-CatGrid.jsx"
import Guidelins from "./pages/Guidelines"
import Home from "./pages/Home";
import "./styles/App.css";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
     <Home />
     <CatGrid/>
      {}
    </div>
  );
};

export default App;
