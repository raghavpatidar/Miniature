import React, { useState } from "react";
import veg from '../../assets/veg.png'
import nonveg from '../../assets/non-veg.png'
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router";



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'fit-content',
    maxWidth: '60%',
    bgcolor: 'background.paper',
    // backgroundColor: 'transparent',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const BestSeller = (props) => {
    const isbest = props.best;
    if (isbest) {
        return (
            <i className='best'>Best seller</i>
        )
    }
    return null
}
const Items = (props) => {
    const [currItem, setcurrItem] = useState();
    const navigate = useNavigate();
    const handleOpen = (item) => {
        setcurrItem(item);
        navigate(`/edit/${props.id}/${item.itemid}`, { state: currItem });
    }
    const items = props.item;
    return (
        <div className='container-item'>
            {items.map((item, idx) => {
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
                                <span className=''> {item.itemName} </span>
                                <BestSeller best={item.bestseller} key={item.itemName} />
                            </div>
                            <div className='price cartitem'>
                                <div>
                                    ₹ {item.price}
                                    <div className='cart-btn'  >
                                        <div >
                                            <button onClick={() => handleOpen(item)}  >
                                                <EditIcon></EditIcon>
                                            </button>
                                        </div>
                                    </div>
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