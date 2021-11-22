import React from "react";
import foodData from '../../data'
import Item from './AdminItems'
import Cart from '../Cart/Cart'



const Tags = () => {


    return (
        <div>
            {/* <Cart /> */}
            {foodData.map((food) => {
                const itemtag = food.name;
                return (
                    <>
                        <h1 className="Tags" id={itemtag}>{itemtag}</h1>
                        <Item item={food.item} key={itemtag} />
                    </>
                )
            })}
        </div>

    )
}

export default Tags;