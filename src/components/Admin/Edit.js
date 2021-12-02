import React from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import Modal from './Modal'



const Details = () => {
    const { state } = useLocation();
    const { id1, id2 } = useParams();


    console.log(id1 + '\n' + id2);
    console.log(state);
    return (
        <div className='form'>
            <Modal />
        </div>
    );
};

export default Details;
