import '../styles/CartSummary.css';
import getCartTotal from '../utils/getCartTotal';

function CartSummary({ cart, products, handleCheckout, handleContinue }) {
  return (
    <div className="CartSummary">
      <p className="CartSummary-total">
        Your total is: ${getCartTotal(cart, products)}
      </p>
      <div className="CartSummary-actions">
        <button className="CartSummary-button" onClick={handleCheckout}>
          Checkout
        </button>
        <button className="CartSummary-button" onClick={handleContinue}>
          Continue shopping
        </button>
      </div>
    </div>
  );
}

export default CartSummary;
