import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <section className="cart-item-container">
            <img src={imageUrl} alt={name} />
            <div className="item-details">
                <span> {name} </span>
                <span> {quantity} x ${price} </span>
            </div>
        </section>
    );
}
 
export default CartItem;