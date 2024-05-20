import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';

interface CartItem {
  name: string;
  quantity: number;
  price: number;
}

const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);

  const handleAddToCart = (medication: Medication) => {
    const newCart = [...cart];
    newCart.push({ name: medication.name, quantity: 1, price: medication.price });
    setCart(newCart);
    calculateTotal();
  };

  const handleQuantityChange = (index: number, quantity: number) => {
    const newCart = [...cart];
    newCart[index].quantity = quantity;
    setCart(newCart);
    calculateTotal();
  };

  const handleIncrement = (index: number) => {
    const newCart = [...cart];
    newCart[index].quantity++;
    setCart(newCart);
    calculateTotal();
  };

  const handleDecrement = (index: number) => {
    const newCart = [...cart];
    newCart[index].quantity--;
    if (newCart[index].quantity < 1) {
      newCart[index].quantity = 1;
    }
    setCart(newCart);
    calculateTotal();
  };

  const calculateTotal = () => {
    const newTotal = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
    setTotal(newTotal);
  };

  return (
    <>
    <Navbar />
    <div className="container mx-auto p-4 pt-6">
      <ul>
        {cart.map((item, index) => (
          <li key={item.name} className="flex justify-between mb-4">
            <div>
              <span className="text-lg">{item.name}</span>
              <span className="text-sm">Quantity: {item.quantity}</span>
              <span className="text-sm">Price: {item.price}</span>
            </div>
            <div className="flex">
              <button
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleDecrement(index)}
              >
                <FaMinus />
              </button>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(index, e.target.valueAsNumber)}
                className="w-20 pl-2 text-sm"
              />
              <button
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleIncrement(index)}
              >
                <FaPlus />
              </button>
            </div>
          </li>
        ))}
    </ul>
      <div className="flex justify-between mb-4">
        <span className="text-lg">Subtotal:</span>
        <span className="text-lg">GHC 3,000</span>
      </div>
      <div className="flex justify-between mb-4">
        <span className="text-lg">Tax:</span>
        <span className="text-lg">GHC 500.00</span>
      </div>
      <div className="flex justify-between mb-4">
        <span className="text-lg">Discount:</span>
        <span className="text-lg">GHC 100.00</span>
      </div>
      <div className="flex justify-between mb-4">
        <span className="text-lg">Total:</span>
        <span className="text-lg">GHC 3,500</span>
      </div>
      <button className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Place Order
      </button>
      <div className='p-50'></div>
    </div>
    <Footer />
    </>
  );
};

export default Cart;