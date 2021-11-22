import React from "react";
import foodData from '../../data'

const NavFoodList = () => {
    const name = "sandwich"
    console.log(foodData);
    return (
        <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                {foodData.map((food) => {
                    const itemtag = food.name;
                    const id = "#" + itemtag;
                    return (
                        <Item name={itemtag} key={itemtag} />
                    )
                })}
            </ul>
        </div>
    )
}

const Item = (props) => {
    return (
        <li className="nav-item ">
            <a className="nav-link active item " aria-current="page" href={"#" + props.name}>{props.name}</a>
        </li>
    )
}
export default NavFoodList;