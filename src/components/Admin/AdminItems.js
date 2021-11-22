import React from "react";
import food from "../../data";
import foodData from '../../data'
import { useState } from "react";
// import { AddShoppingCartIcon } from '@mui/icons-material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import logo from '../../assets/cafelogo.png'
import veg from '../../assets/veg.png'
import nonveg from '../../assets/non-veg.png'
import bs from '../../assets/bestseller1.png'
import EditIcon from '@mui/icons-material/Edit';
import BasicModal from "./Modal";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ChangeForm from "./changeForm,";

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

const styleM = {
    background: 'transparent',
}
const BestSeller = (props) => {
    const isbest = props.best;
    if (isbest) {
        // return <img src={bs} alt='logo' className='best-icon best-img ' />
        return (
            <i className='best'>Best seller</i>
        )
    }
    return null
}



const Items = (props) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    const items = props.item;
    return (
        <div className='container-item'>
            {items.map((item, idx) => {
                const isveg = item.veg;
                var srcimg = veg;
                if (!isveg) {
                    srcimg = nonveg
                }
                const bestSeller = item.bestSeller;
                const name = item.itemName;
                const price = item.price;
                // console.log("kings data")
                // console.log(name, price, bestSeller);
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
                                    ₹ {item.price}
                                    <button className='cart-btn' >
                                        <div >
                                            <button onClick={handleOpen} ><EditIcon></EditIcon></button>
                                            <Modal
                                                open={open}
                                                onClose={handleClose}
                                                aria-labelledby="modal-modal-title"
                                                aria-describedby="modal-modal-description"
                                            >
                                                <Box sx={style}>
                                                    <div>
                                                        <ChangeForm item={item} key={idx}></ChangeForm>
                                                    </div>
                                                </Box>
                                            </Modal>
                                        </div>
                                    </button>
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