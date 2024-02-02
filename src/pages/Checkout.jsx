import { useState, useEffect } from "react";

const Checkout = ({ subscriptionInfo, onRemoveSubscription }) => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (subscriptionInfo) {
      setSubscriptions((prevSubscriptions) => [
        ...prevSubscriptions,
        subscriptionInfo,
      ]);
    }
  }, [subscriptionInfo]);

  useEffect(() => {
    const newTotalAmount = subscriptions.reduce(
      (acc, subscription) => acc + parseFloat(subscription.price),
      0
    );

    setTotalAmount(newTotalAmount);
  }, [subscriptions]);

  const handleRemoveSubscription = (index) => {
    onRemoveSubscription(index);

    const newTotalAmount = subscriptions
      .filter((_, i) => i !== index)
      .reduce((acc, subscription) => acc + parseFloat(subscription.price), 0);

    setTotalAmount(newTotalAmount);
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <div className="subscriptions-list">
        <h3>Subscriptions:</h3>
        <ul>
          {subscriptions.map((subscription, index) => (
            <li key={index}>
              {`${subscription.name} - ${subscription.months} months - £${subscription.price}`}
              <button onClick={() => handleRemoveSubscription(index)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="total-amount">
        <h3>Total Amount:</h3>
        <p>£{totalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Checkout;
