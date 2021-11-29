import React from "react";
// import foodData from '../../data'
import Item from './Items'
// import Cart from '../Cart/Cart'
import { CartState } from "../../context/Context";



const Tags = () => {

    const { state: { products } } = CartState();
    console.log(products);

    const foodData = products;

    return (
        <div>
            {/* <Cart /> */}
            {foodData.map((food, i) => {
                const itemtag = food.name;
                return (
                    <>
                        <h1 className="Tags" id={itemtag}>{itemtag}</h1>
                        <Item item={food.items} key={food.id} />
                    </>
                )
            })}
        </div>
    )
}

export default Tags;