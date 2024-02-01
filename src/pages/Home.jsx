// import NavBar from './NavBar';
import "../styles/Home.css";
import logo from "../Images/MicrosoftTeams-image.png";
import { FaPaw } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home-page">
      {/* <NavBar /> */}
      <div className="content-container">

        <div className="slogan-container">
          <p className="slogan">The purrrrfect choice!</p>
        </div>
        
        <div className="text-box">
            <p className="editable-text">
              Welcome to OnlyCats. The UK`s number one stop for all your feline
              fettishes. No request is to big for our pussies. Complete your
              request and pay the feline fee. We hope you have a Purrrrrfect
              Day!
            </p>
          </div>

        <div className="login-container">
          <div className="input-container">
            <div className="paw-icon">
              <FaPaw size={24} color="#01b1ef" />
            </div>
            <input type="text" placeholder="Username" />
          </div>

          <div className="input-container">
            <div className="paw-icon">
              <FaPaw size={24} color="#01b1ef" />
            </div>
            <input type="password" placeholder="Password" />
          </div>
          <button className="login-button">Login</button>
        </div>

        <div className="video-and-text-container">
          <div className="video-container">

          </div>

        </div>

      </div>
    </div>
  );
};

export default Home;
