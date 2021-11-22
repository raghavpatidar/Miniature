


import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Tags from './components/Headers/Tags';
import Footer from './components/Footer/Footer'
import Carousel from './components/carousel/Carousel'
import AdminHome from "./components/Admin/AdminHome";
import ItemList from './components/HorizontalItemList/ItemList';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import './css/App.css'
// const App = () => {
//     return (

//         <>
//             <NavBar></NavBar>
//             <AdminHome></AdminHome>

//             {/* <NavBar></NavBar> */}
//             <div className='tags'>
//                 <Carousel></Carousel>
//                 <Tags></Tags>
//                 <Footer></Footer>
//             </div>
//         </>

//     )

// }

function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={
                        <>
                            <NavBar></NavBar>
                            <div className='tags'>
                                <ItemList />
                                <Carousel></Carousel>
                                <Tags></Tags>
                                <Footer></Footer>
                            </div>
                        </>
                    } />
                </Routes>
                <Routes>

                    <Route path="/admin" element={<><AdminHome></AdminHome></>} />
                </Routes>
                <Routes>
                    <Route path="/item" element={<ItemList></ItemList>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}



export default App;