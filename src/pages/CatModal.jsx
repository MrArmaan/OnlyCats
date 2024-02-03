import { useState } from "react";
import "../styles/CatModal.css";
import PropTypes from "prop-types";

const CatModal = ({ catData, onClose, onSubscribe }) => {
  const [months] = useState(Math.floor(Math.random() * 4) + 1);
  const [price] = useState((Math.random() * 20).toFixed(2));

  const handleSubscribe = () => {
    onSubscribe({
      name: catData.name,
      months,
      price,
    });
    onClose();
  };

  return (
    <div className="cat-modal-overlay">
      <div className="cat-modal">
        <img src={catData.url} alt={`Cat`} />
        <h2>{catData.name}</h2>
        <p>{`Months included in subscription: ${months}`}</p>
        <p>{`Price of subscription: £${price}`}</p>
        <button onClick={handleSubscribe}>Subscribe</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

CatModal.propTypes = {
  catData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  onSubscribe: PropTypes.func.isRequired,
};

export default CatModal;
