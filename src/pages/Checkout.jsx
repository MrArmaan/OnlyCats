import React, { useState } from 'react';

const Checkout = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePayment = () => {    
    console.log('Processing payment...');    
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Address:
          <textarea value={address} onChange={handleAddressChange} />
        </label>
        <br />
        <button type="button" onClick={handlePayment}>
          Process Payment
        </button>
      </form>
    </div>
  );
};

export default Checkout;
