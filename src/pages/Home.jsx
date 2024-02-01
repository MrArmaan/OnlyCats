// import NavBar from './NavBar';
import "../styles/Home.css";
import { FaPaw } from "react-icons/fa";
import bannerImage from "../assets/onlycats_banner.jpg";

const Home = () => {
  return (
    <div className="home-page">
      {/* Banner */}
      <div className="content-container">
        {/* Banner Container */}
        <div className="banner-container">
          <img src={bannerImage} alt="OnlyCats Banner" className="banner-image" />
        </div>

        {/* Slogan Container */}
        <div className="slogan-container">
          <p className="slogan"> Welcome to OnlyCats!</p>
        </div>

        {/* Text Box */}
        <div className="text-box">
          {/* Text Container */}
          <div className="text-container">
            {/* Editable Text */}
            <p className="editable-text">
              The purrrrfect choice for all your feline fetishes. No request is too big for our cats. Complete your request
              and pay the feline fee. Please login below so you can interact with your favourite cats. We hope you have a
              Purrrrrfect Day!
            </p>
          </div>

          {/* Login Container */}
          <div className="login-container">
            {/* Username Input */}
            <div className="input-container">
              <div className="paw-icon">
                <FaPaw size={24} color="#01b1ef" />
              </div>
              <input type="text" placeholder="Username" />
            </div>

            {/* Password Input */}
            <div className="input-container">
              <div className="paw-icon">
                <FaPaw size={24} color="#01b1ef" />
              </div>
              <input type="password" placeholder="Password" />
            </div>

            {/* Login Button */}
            <button className="login-button">Login</button>
          </div>

          {/* Video and Text Container */}
          <div className="video-and-text-container">
            {/* Video Container */}
            <div className="video-container">
              {/* Add your video component or content here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;