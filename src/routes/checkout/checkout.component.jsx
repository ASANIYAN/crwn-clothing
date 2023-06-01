import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.styles.scss";

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <section className="checkout-container">
            <section className="checkout-header">
                <div className="header-block">
                    <span> Product </span>
                </div>
                <div className="header-block">
                    <span> Description </span>
                </div>
                <div className="header-block">
                    <span> Quantity </span>
                </div>
                <div className="header-block">
                    <span> Price </span>
                </div>
                <div className="header-block">
                    <span> Remove </span>
                </div>
            </section>
            {
                cartItems.map((cartItem) => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))
            }
            <span className="total"> Total: ${cartTotal} </span>
        </section>
    );
}
 
export default Checkout;