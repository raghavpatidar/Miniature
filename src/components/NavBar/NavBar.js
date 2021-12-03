import React from "react";
import logo from "../../assets/cafelogo.png"
import '../../css/App.css'
import NavbarSlider from './NavbasSlider'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import { CartState } from "../../context/Context";

const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-sm navbar-light  fixed-top "  >
            <div className="container-fluid">
                <Headerlogo />
                <TogglerButton />
                {/* <NavbarSlider /> */}
            </div>
        </nav>
    )
};
const Headerlogo = () => {
    return (

        <a className="navbar-brand logo" href="#">
            <div className=''>
                <img src={logo} alt='logo' className='logo-icon logo-img ' />
                <h1  > The Minature Cafe  <p className='small'>Estd. 2019</p> </h1>
            </div>

        </a>

    )
}
const TogglerButton = () => {
    const { state: { cart } } = CartState();
    return (
        <div className=''>
            <div className='price cartitem'>
                <div>
                    <button className='cart-btn-main' >
                        <Link to='cart'>
                            <ShoppingCartIcon className='cart-icon' />
                            <span style={{ color: "", fontWeight: "bolder" }}>{cart.length}</span>
                        </Link>
                    </button>
                </div>
            </div>

            {/* <button className="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar">
                <span className="navbar-toggler-icon"></span>
            </button> */}
        </div >

    )
}

export default NavBar;
