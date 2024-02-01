import React from "react";
import "./styles/App.css";
import CatGrid from "./services/CatApi-CatGrid.jsx";
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
    // You can add additional logic here if needed
  }

  return (
    <>
      <h1>Welcome to OnlyCats!</h1>
      <CatGrid onClick={handleClick} />
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
            {/* <h2>{faker.name.firstName()}</h2> */}
            <p>{faker.person.bio()}</p>

            {/* Button to close the modal */}
            <button onClick={closeModal}>Close</button>
          </div>
        )}
      </Modal>
    </>
  );
}

export default App;
// ReactDOM.render(<App />, document.getElementById('root'));
// for modal faker.person.bio()