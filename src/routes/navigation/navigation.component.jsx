import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import CrwnLogo from '../../assets/crown.svg';
import { signOutUser } from "../../utils/firebase/firebase.utils";

import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  // console.log(currentUser);

    return (
      <Fragment>
        <nav className="navigation">
            <Link className="logo-container" to={"/"}>
                <img src={CrwnLogo} alt="crown-logo" className="logo" />
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to={"/shop"}>SHOP</Link>
                {
                  currentUser ? 
                  ( <span className="nav-link" onClick={signOutUser} >SIGN OUT</span> )
                  :
                  ( <Link className="nav-link" to={"/auth"}>SIGN IN</Link> ) 
                }
                <CartIcon />
            </div>
            { isCartOpen && <CartDropdown /> }
        </nav>
        <Outlet />
      </Fragment>
    )
}

export default Navigation;