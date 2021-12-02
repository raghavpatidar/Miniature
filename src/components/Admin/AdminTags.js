import React from "react";
// import foodData from '../../data'
import Item from './AdminItems'
// import Cart from '../Cart/Cart'
import { CartState } from "../../context/Context";



const Tags = () => {

    const { state: { products } } = CartState();
    console.log('data is here')
    console.log(products);
    const foodData = products;
    return (
        <div>
            {/* <Cart /> */}
            {foodData.map((food, idx) => {
                const itemtag = food.name;
                return (
                    <>
                        <h1 className="Tags" id={itemtag}>{itemtag}</h1>
                        <Item item={food.items} id={food.id} key={idx} />
                    </>
                )
            })}
        </div>

    )
}

export default Tags;