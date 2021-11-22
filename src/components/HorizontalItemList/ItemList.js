import "./styles.css";
import data from "./fruits.json";
import Tag from "./SpecificItem";
import { useState, useRef } from "react";
import gsap from "gsap";
import fooddata from '../../data'


export default function ItemList() {
    let scrl = useRef(null);
    const [scrollX, setscrollX] = useState(0);
    const [scrolEnd, setscrolEnd] = useState(false);

    //Slide click
    const slide = (shift) => {
        scrl.current.scrollLeft += shift;
        setscrollX(scrollX + shift);

        if (
            Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
            scrl.current.offsetWidth
        ) {
            setscrolEnd(true);
        } else {
            setscrolEnd(false);
        }
    };

    //Anim
    const anim = (e) => {
        gsap.from(e.target, { scale: 1 });
        gsap.to(e.target, { scale: 1.5 });
    };
    const anim2 = (e) => {
        gsap.from(e.target, { scale: 1.5 });
        gsap.to(e.target, { scale: 1 });
    };

    const scrollCheck = () => {
        setscrollX(scrl.current.scrollLeft);
        if (
            Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
            scrl.current.offsetWidth
        ) {
            setscrolEnd(true);
        } else {
            setscrolEnd(false);
        }
    };

    return (
        <center>
            <div className="App">
                {scrollX !== 0 && (
                    <button
                        className="prev"
                        onClick={() => slide(-50)}
                        onMouseEnter={(e) => anim(e)}
                        onMouseLeave={(e) => anim2(e)}
                    >
                        <i className="fa fa-angle-left"></i>
                    </button>
                )}
                <ul ref={scrl} onScroll={scrollCheck}>
                    {fooddata.map((food, i) => (
                        <Tag data={food} key={i} />
                    ))}
                    {/* {data.fruits.map((d, i) => (
                        <Tag data={d} key={i} />
                    ))} */}
                </ul>
                {!scrolEnd && (
                    <button
                        className="next"
                        onClick={() => slide(+50)}
                        onMouseEnter={(e) => anim(e)}
                        onMouseLeave={(e) => anim2(e)}
                    >
                        <i className="fa fa-angle-right"></i>
                    </button>
                )}
            </div>
        </center>
    );
}
