import React, { useState } from "react";
import { MDBContainer, MDBInputGroup } from "mdbreact";
import { Link } from "react-router-dom";

const ChangeForm = (props) => {

    // const [dishName, setDishName] = useState('');
    const [itemDetail, setDetail] = useState({
        dishName: "Sandwich",
        price: 120,
        veg: true,
        bestSeller: false
    })
    console.log("form data \n" + props.item);



    const handelChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setDetail({ ...itemDetail, [name]: value })
        console.log("item updeted \n" + itemDetail);

    }
    const handelSubmit = (e) => {
        e.preventDefault();

        const newItem = { ...itemDetail }
        setDetail({ ...itemDetail, newItem })
        console.log(itemDetail);
        // setPorson({ firstName: '', age: '', email: '' })
    }

    return (
        <article>
            <form className='form' onSubmit={handelSubmit}>
                <div className='form-control'>
                    <label className='form-label' htmlFor='firstName'>DishName : </label>
                    <input
                        type='text'
                        id='dishName'
                        name='dishName'
                        value={itemDetail.dishName}
                        onChange={handelChange}
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='email'>Price : </label>
                    <input
                        type='number'
                        id='price'
                        name='price'
                        value={itemDetail.price}
                        onChange={handelChange}
                    />
                </div>
                <div class="form-check">
                    <input
                        class="form-check-input"
                        type="checkbox"
                        id="flexCheckDefault"
                        value={itemDetail.veg}
                        onChange={handelChange}
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                        veg
                    </label>
                </div>
                <div class="form-check">
                    <input
                        class="form-check-input"
                        type="checkbox"
                        value={itemDetail.bestSeller}
                        id="flexCheckDefault"
                        onChange={handelChange}
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                        bestSeller
                    </label>
                </div>
                <hr />
                <button type='submit' >Save Changes</button>
            </form>
        </article>
    )
}


export default ChangeForm;