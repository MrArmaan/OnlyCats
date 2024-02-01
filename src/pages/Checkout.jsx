
import { useState } from 'react';

const Product = ({ id, name, price, addToCart }) => {
    const handleAddToCart = () => {
        addToCart({ id, name, price, quantity: 1 });
    };

    return (
        <div>
        <h3>{name}</h3>
        <p>Price: £{price}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
    };

    const ShoppingCart = ({ cart }) => {      
    return (
        <div>
        <h2>Shopping Cart</h2>
        <ul>
            {cart.map(item => (
            <li key={item.id}>
                {item.name} - £{item.price} - Quantity: {item.quantity}
            </li>
            ))}
        </ul>
        </div>
    );
    };

    const App = () => {
    const [cart, setCart] = useState([]);

    const addToCart = item => {

    const itemIndex = cart.findIndex(cartItem => cartItem.id === item.id);

    if (itemIndex !== -1) {
        const updatedCart = [...cart];
        updatedCart[itemIndex].quantity++;
        setCart(updatedCart);
        } else {
        setCart([...cart, item]);
        }
    };

    return (
        <div>
        <h1>Checkout</h1>

        <Product id={1} name="Product 1" price={10} addToCart={addToCart} />
        <Product id={2} name="Product 2" price={15} addToCart={addToCart} />

        <ShoppingCart cart={cart} />
        </div>
    );
};

export default App;
