import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { CartContext } from "../../contexts/cart.context";
import { selectCurrentUser } from "../../store/user/user.selector";

import CrwnLogo from '../../assets/crown.svg';
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from "./navigation.styles.jsx";

import './navigation.styles.jsx';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext);

    return (
      <Fragment>
        <NavigationContainer>
            <LogoContainer to={"/"}>
                <img src={CrwnLogo} alt="crown-logo" className="logo" />
            </LogoContainer>
            <NavLinks>
                <NavLink to={"/shop"}>SHOP</NavLink>
                {
                  currentUser ? 
                  ( <NavLink as={'span'} onClick={signOutUser} >SIGN OUT</NavLink> )
                  :
                  ( <NavLink className="nav-link" to={"/auth"}>SIGN IN</NavLink> ) 
                }
                <CartIcon />
            </NavLinks>
            { isCartOpen && <CartDropdown /> }
        </NavigationContainer>
        <Outlet />
      </Fragment>
    )
}

export default Navigation;