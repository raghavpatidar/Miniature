

import React, { useState } from "react";
import { Card } from "react-bootstrap";
// import { Box}



const Modal = (props) => {


    // const [dishName, setDishName] = useState('');


    const item = {
        itemName: "sandwich",
        price: 120,
        veg: true,
        bestSeller: false,
    };
    console.log(item);
    const [itemDetail, setDetail] = useState({
        dishName: item.itemName,
        price: item.price,
        veg: item.veg,
        bestSeller: item.bestSeller
    })
    // console.log("form data \n" + props.item);
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

    // const [open, setOpen] = React.useState(props.open);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
    // const item = props.item
    return (
        <div className='item'>

            <Card style={{ width: '100%', padding: '2rem' }}>
                <Card.Body>


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
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexCheckDefault"
                                value={itemDetail.veg}
                                onChange={handelChange}
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                veg
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value={itemDetail.bestSeller}
                                id="flexCheckDefault"
                                onChange={handelChange}
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                bestSeller
                            </label>
                        </div>
                        <hr />
                        <button type='submit' >Save Changes</button>
                    </form>

                    {/* <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text> */}



                    {/* <Card.Button href="#">Card Link</Card.Button> */}
                    {/* <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
            </Card>
        </div>

    )
}

export default Modal;

















// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Modal from '@mui/material/Modal';
// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     // bgcolor: 'background.paper',
//     // bgcolor: 'transparent',
//     backgroundColor: 'transparent',
//     border: '2px solid #f0df56',
//     boxShadow: 24,
//     p: 4,
// };
// // const modalStyle = {
// //     backgroundColor: 'transparent',
// //     // Opacity: '15%',
// // };

// export default function BasicModal() {
//     const [open, setOpen] = React.useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);

//     return (
//         <div>
//             <Button onClick={handleOpen}>Open modal</Button>
//             <Modal
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="modal-modal-title"
//                 aria-describedby="modal-modal-description"
//             // sx={modalStyle}
//             >
//                 <Box sx={style}>
//                     {/* <Typography id="modal-modal-title" variant="h6" component="h2">
//                         Text in a modal
//                     </Typography>
//                     <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//                         Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//                     </Typography> */}
//                     <div>
//                         <h2>Modal heading component</h2>
//                         <p>king is always the king and baki sab madarchoood he bhenchlode</p>
//                     </div>
//                 </Box>
//             </Modal>
//         </div>
//     );
// }