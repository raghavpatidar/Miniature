// import React from "react";
// import srcimg from '../../assets/DSC08769.JPG'
import srcimg1 from '../../assets/DSC08785.JPG'
// import '../../css/App.css'

// const Carousel = () => {

//     return (

//     );


// }

var React = require('react');
var ReactDOM = require('react-dom');
// var Carousel = require('react-responsive-carousel').Carousel;

const DemoCarousel = () => {
    return (
        <div className='item'>
            <img src={srcimg1} className='carousel-img'></img>
        </div>
    )
}

// var DemoCarousel = () => (



// );
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

export default DemoCarousel;