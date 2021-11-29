import React from 'react'
import veg from '../../assets/veg.png'
import nonveg from '../../assets/non-veg.png'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { IoMdRemoveCircle } from 'react-icons/io'
import { CartState } from '../../context/Context';
// import { Button } from 'react-bootstrap';


const BestSeller = (props) => {
    const isbest = props.best;
    if (isbest) {
        return (
            <i className='best'>Best seller</i>
        )
    }
    return null
}
const SingleItem = (props) => {

    const {
        state: { cart },
        dispatch,
    } = CartState();
    // console.log(cart);

    const item = props.item;
    const isveg = item.veg;
    var srcimg = veg;
    if (!isveg) {
        srcimg = nonveg
    }
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
                        ₹ {item.price.split(".")[0]}
                        {cart.some((p) => p.itemid === item.itemid) ? (
                            <button
                                className=" cart-btn"
                                onClick={() =>
                                    dispatch({
                                        type: "REMOVE_FROM_CART",
                                        payload: item,
                                    })
                                }
                            >
                                <IoMdRemoveCircle></IoMdRemoveCircle>
                            </button>
                        ) : (
                            <button
                                className="cart-btn"
                                onClick={() =>
                                    dispatch({
                                        type: "ADD_TO_CART",
                                        payload: item,
                                    })
                                }
                            >
                                <AddShoppingCartIcon></AddShoppingCartIcon>
                            </button>
                        )}
                        {/* <button className='cart-btn' >

                        </button> */}
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default SingleItem
