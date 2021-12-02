import React from "react";
import logo from "../../assets/cafelogo.png"
import '../../css/App.css'
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';


const CartNav = () => {

    return (
        <nav className="navbar navbar-light bg fixed-top"  >
            <div className="container-fluid">
                <a className="navbar-brand logo" href="#">
                    <div className=''>
                        <img src={logo} alt='logo' className='logo-icon logo-img ' />
                    </div>
                    <h1 > The Minature Cafe <br /> <p>Estd. 2019</p> </h1>
                </a>

                <div className=''>
                    <div className='price cartitem'>
                        <div>
                            <button className='cart-btn' >
                                <Link to='/'>

                                    <HomeIcon className='cart-icon' style={{ fontSize: "2rem" }} >

                                    </HomeIcon>
                                </Link>
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        </nav>

    )

}

export default CartNav;