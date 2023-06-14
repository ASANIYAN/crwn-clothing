import { CartItemContainer } from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={name} />
            <div className="item-details">
                <span> {name} </span>
                <span> {quantity} x ${price} </span>
            </div>
        </CartItemContainer>
    );
}
 
export default CartItem;