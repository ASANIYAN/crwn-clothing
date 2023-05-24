import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import CrwnLogo from '../../assets/crown.svg';
import './navigation.styles.scss';

const Navigation = () => {
    return (
      <Fragment>
        <nav className="navigation">
            <Link className="logo-container" to={"/"}>
                <img src={CrwnLogo} alt="crown-logo" className="logo" />
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to={"/shop"}>SHOP</Link>
                <Link className="nav-link" to={"/sign-in"}>SIGN IN</Link>
            </div>
        </nav>
        <Outlet />
      </Fragment>
    )
}

export default Navigation;