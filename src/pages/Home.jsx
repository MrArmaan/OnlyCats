// import NavBar from './NavBar';
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-page">
      {/* <NavBar /> */}
      <div className="title-container">
        <h1 className="page-title">Only Cats</h1>
      </div>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/hxt8Dh6cY8U"
          title="Only Cats Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
