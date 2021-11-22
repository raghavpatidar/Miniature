import React from "react";
import logo from "../../assets/cafelogo.png"
import '../../css/App.css'

import NavbarSlider from './NavbasSlider'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const NavBar = () => {
    return (

        <nav className="navbar navbar-light bg fixed-top"  >
            <div className="container-fluid">
                <Headerlogo />
                <TogglerButton />
                <NavbarSlider />
            </div>
        </nav>
    )
};
const Headerlogo = () => {
    return (

        <a className="navbar-brand logo" href="#">
            <div className=''>
                <img src={logo} alt='logo' className='logo-icon logo-img ' />
            </div>
            <h1 > The Minature Cafe <br /> <p>Estd. 2019</p> </h1>

        </a>

    )
}
const TogglerButton = () => {
    return (
        <div className=''>
            <div className='price cartitem'>
                <div>
                    <button className='cart-btn' >
                        <ShoppingCartIcon className='cart-icon'></ShoppingCartIcon>
                    </button>
                </div>
            </div>

            <button className="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>

    )
}

export default NavBar;