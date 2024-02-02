import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Guidelines from "./pages/Guidelines";
import Checkout from "./pages/Checkout";
import ErrorBoundary from "./pages/ErrorBoundary";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import React from "react";
import Modal from 'react-modal';
import {faker} from "@faker-js/faker";

// Set the app element for the modal
Modal.setAppElement(document.getElementById('root'));

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function App() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [selectedImg, setSelectedImg] = React.useState(null);

  // Function to open the modal
  function openModal() {
    setIsOpen(true);
  }

  // Function to close the modal
  function closeModal() {
    setIsOpen(false);
  }

  // Function to handle the click on a cat image
  function handleClick(img) {
    setSelectedImg(img);
    openModal();
  }

  // Function to apply styles after the modal has opened
  function afterOpenModal() {
    
  }

  return (
    <>
    
      <h1>Welcome to OnlyCats!</h1>
      {/* <CatGrid onClick={handleClick} /> */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Cat Bio"
      >
        {/* Render details of the selected img */}
        {selectedImg && (
          <div>
            <img src={selectedImg.url} alt={`Selected Cat`} />
            
            <p>{faker.person.bio()}</p>
            
            {/* Button to close the modal */}
            <button onClick={closeModal}>Close</button>
          </div>
        )}
      </Modal>
    
    <Router>
      <div>
        <Navbar />
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Catalog" element={<Catalog onClick={handleClick} />} />
            <Route path="/Guidelines" element={<Guidelines />} />
            <Route path="/Checkout" element={<Checkout />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </Router>
    </>
  );
};

export default App;
