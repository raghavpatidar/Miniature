import React from "react";
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import veg from '../../assets/veg.png'
// import nonveg from '../../assets/non-veg.png'
import SingleItem from "./SingleItem";


const Items = (props) => {
    const items = props.item;
    return (
        <div className='container-item'>
            {items.map((item) => {
                return (
                    <SingleItem item={item}></SingleItem>
                )
            })}
        </div>
    )
}
export default Items;
