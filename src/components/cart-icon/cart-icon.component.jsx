import { useContext } from "react";

import ShoppingIcon  from "../../assets/shopping-bag.svg";

import { CartContext } from "../../contexts/cart.context";

import { CartIconContainer, ItemCount } from "./cart-icon.styles.jsx";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <img src={ShoppingIcon} className='shopping-icon' alt="" />
            <ItemCount>
                {cartCount}
            </ItemCount>
        </CartIconContainer>
    );
}
 
export default CartIcon;