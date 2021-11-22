import React from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import logo from '../../assets/cafelogo.png'

import { Avatar } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Foorter = () => {
    return (
        <div className='footer'>
            <Logo></Logo>
            <About></About>
            <Contact></Contact>
        </div>
    )
}

const About = () => {
    return (
        <div id='about'>
            <h1>About Us</h1>
            <i>We Belive in Quality akk around. Quality food can't be made wihout quakirt initiatve. Each meal is prepared with love and attention to derail to ensure real taste and autencticity. When you wat a meal at our restaurants, we ensure it becomes an experience.</i>
        </div>
    )
}
const Contact = () => {
    return (
        <div id='contact'>
            <div className='contact'>
                <h3 href='mailto:theminiaturcafe@gmail.com' className='btn'><EmailIcon />Email US</h3>
                <h3 hre='www.instagram.com' className='btn'><InstagramIcon />Instagram</h3>
                <h3><LocationOnIcon />17- Abhir colony, Gamle Wali Puliya , Rajendra Nagar , Indore</h3>
            </div>
            <hr></hr>
            <h2 className='tag'>Phone :+91 9754321111</h2>
        </div>
    )
}
const Logo = () => {
    return (

        <img src={logo} alt='Logo' className='footer-img' />
        // </div >

    )
}

export default Foorter;