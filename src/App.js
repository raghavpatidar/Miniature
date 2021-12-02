import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Tags from './components/Headers/Tags';
import Footer from './components/Footer/Footer'
import Carousel from './components/carousel/Carousel'
import AdminHome from "./components/Admin/AdminHome";
import ItemList from './components/HorizontalItemList/ItemList';
import Edit from './components/Admin/Edit';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import './css/App.css'
import Cart from "./components/Cart/Cart";
function App() {
    return (
        <BrowserRouter>
            {/* <div> */}
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
            {/* <Routes>

                <Route path="/admin" element={<><AdminHome></AdminHome></>} />
            </Routes> */}
            <Routes>
                <Route path="/cart" element={<Cart></Cart>} />
            </Routes>
            {/* <Routes>
                <Route path="/edit/:id1/:id2" element={<Edit></Edit>} />
            </Routes> */}
        </BrowserRouter>
    );
}



export default App;