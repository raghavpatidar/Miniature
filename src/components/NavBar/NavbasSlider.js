import React from "react";
import NavFoodList from "./NavFoodList";

const NavbarSlider = () => {
    return (
        <div className="offcanvas offcanvas-end sidebar-mine" tabIndex="-1" id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <SliderHeader />
            <NavFoodList />
        </div>
    )
}
const SliderHeader = () => {
    return (
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel item">Drive in</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
        </div>
    )
}
export default NavbarSlider;