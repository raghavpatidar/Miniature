import React from "react";
import { useEffect, useState } from 'react'
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartState } from "../../context/Context";
import SingleItem from "../Headers/SingleItem";
import { Link } from "react-router-dom";
import NavBar from '../NavBar/NavBar'
import cartimg from '../../assets/cart4.png'
import CartNav from '../NavBar/CartNav'
const Cart = () => {
    const { state: { cart } } = CartState();

    console.log(cart);
    var check = false;
    console.log("longth is  " + cart.length)
    if (cart.length !== 0) {
        check = true;
    }
    const [total, setTotal] = useState();
    console.log(check + " checking ")
    useEffect(() => {
        setTotal(
            cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
        );
    }, [cart]);

    return (
        <>
            <div>

            </div>
            <div classs='cartdiv' style={{}}>
                {check ? (
                    <>
                        <CartNav />
                        <div className='tags'>
                            <div className=''>
                                <div style={{ textAlign: 'center', paddingBottom: '5px' }}>

                                    <p>
                                        Selected Items :-
                                    </p>
                                </div>
                                <div className='container-item'>
                                    {cart.map((item) => {
                                        const itemtag = item.itemname;
                                        const id = "#" + itemtag;
                                        return (
                                            <SingleItem item={item} key={itemtag} />
                                        )
                                    })}
                                </div>
                            </div>
                            <div className=''>
                                <h1 className='Tags' style={{}}>Have Fun</h1>
                                {/* <p style={{ position: "right" }}>Total :- {total}</p> */}
                            </div>
                        </div>
                    </>
                ) : (
                    <EmptyCart />
                )
                }
            </div>
        </>
    )

}


const EmptyCart = () => {
    return (
        <div className=' emptycart  '>
            <p className='bold'>Please Add some items to the cart</p>
            <img src={cartimg} alt='empty cart image' />

            <hr />
            <button className='item'>
                {/* Menu */}
                <Link to='/' exact>Menu</Link>
            </button>

        </div>
    )
}

export default Cart;