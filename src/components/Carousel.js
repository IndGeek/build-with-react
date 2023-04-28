import React, { useEffect, useRef } from "react";
import Flickity from "flickity";
import "flickity/dist/flickity.min.css";
import './carousel.css'

function Carousel() {
    const flickityRef = useRef(null);

    useEffect(() => {
        flickityRef.current = new Flickity(".carousel", {
        wrapAround: true,
        autoPlay: 2000
        });

        return () => {
        flickityRef.current.destroy();
        };
    }, []);

    return (
        <div className="carousel gallery">
        <div className="carousel-cell gallery-cell"></div>
        <div className="carousel-cell gallery-cell"></div>
        <div className="carousel-cell gallery-cell"></div>
        <div className="carousel-cell gallery-cell"></div>
        <div className="carousel-cell gallery-cell"></div>
        </div>
    );
}

export default Carousel;
