import React from "react";
import "./slider.css";

const Slider = () => {
    return (
        <>
            <div className="slider">
                <div className="slides">
                    <div id="slide-1"><img src="https://soumyamondal.com/soumya2.jpg" alt="first"/></div>
                    <div id="slide-2"><img src="https://images.pexels.com/photos/14966037/pexels-photo-14966037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="first"/></div>
                    <div id="slide-3">3</div>
                    <div id="slide-4">4</div>
                    <div id="slide-5">5</div>
                    <div id="slide-6">6</div>
                </div>
                <span className="scroll__to">
                    <a href="#slide-1">1</a>
                    <a href="#slide-2">2</a>
                    <a href="#slide-3">3</a>
                    <a href="#slide-4">4</a>
                    <a href="#slide-5">5</a>
                    <a href="#slide-6">6</a>
                </span>
            </div>
        </>
    );
};

export default Slider;
