import React from "react";
import food from "../../data";
import foodData from '../../data'
import { useState } from "react";
// import { AddShoppingCartIcon } from '@mui/icons-material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import logo from '../../assets/cafelogo.png'
import veg from '../../assets/veg.png'
import nonveg from '../../assets/non-veg.png'
import bs from '../../assets/bestseller1.png'

const BestSeller = (props) => {
    const isbest = props.best;
    if (isbest) {
        // return <img src={bs} alt='logo' className='best-icon best-img ' />
        return (
            <i className='best'>Best seller</i>
        )
    }
    return null
}


const Items = (props) => {

    const items = props.item;
    return (
        <div className='container-item'>
            {items.map((item) => {
                const isveg = item.veg;
                var srcimg = veg;
                if (!isveg) {
                    srcimg = nonveg
                }
                // const bestseller = item.veg;
                // var bestsellerimgsrc = bs;
                return (
                    <div>
                        <div className='item'>
                            <div className='itemname'>
                                <img src={srcimg} alt='logo' className='veg-icon veg-img ' />
                                <spam className=''> {item.itemName} </spam>
                                <BestSeller best={item.bestseller} key={item.itemName} />
                            </div>
                            <div className='price cartitem'>
                                <div>
                                    ₹ {item.price}
                                    <button className='cart-btn' >
                                        <AddShoppingCartIcon></AddShoppingCartIcon>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}
export default Items;

// {/* <div>
//     <p className='item'>
//         {/* <p> */}
        // <div className='container-fluid'>
        //     <div className='itemname'>
        //         <div>
        //             <img src={srcimg} alt='logo' className='veg-icon veg-img ' />
        //             {item.itemName}
        //         </div>
        //         <BestSeller best={item.veg} key={item.itemName} />
        //     </div>
        //     <div className='price'>
        //         {/* </p> */}
        //         <p >
        //             ₹ {item.price}
        //             <button className='cart-btn' >
        //                 <AddShoppingCartIcon></AddShoppingCartIcon>
        //             </button>
        //         </p>
        //     </div>
        // </div>
//     </p>
// </div> */}