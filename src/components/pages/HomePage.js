<<<<<<< HEAD
import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
=======
import React from "react";
>>>>>>> main

const HomePage = () => {
    return (
        <div>
            <Carousel style={{ height: "700px", overflow: "hidden" }}>
                <Carousel.Item className="homepage-carousel-item">
                    <img
                        className="d-block w-100 justify-content-center"
                        src="/homepage-photos/pic1.jpg"
                        alt="Image 1"
                    />
                </Carousel.Item>
                <Carousel.Item className="homepage-carousel-item">
                    <img
                        className="d-block w-100 justify-content-center"
                        src="/homepage-photos/pic2.jpg"
                        alt="Image 2"
                    />
                </Carousel.Item>
                <Carousel.Item className="homepage-carousel-item">
                    <img
                        className="d-block w-100 justify-content-center homepage-img-transform"
                        src="/homepage-photos/pic3.jpg"
                        alt="Image 3"
                    />
                </Carousel.Item>
                <Carousel.Item className="homepage-carousel-item">
                    <img
                        className="d-block w-100 justify-content-center homepage-img-transform"
                        src="/homepage-photos/pic4.jpg"
                        alt="Image 4"
                    />
                </Carousel.Item>
                <Carousel.Item className="homepage-carousel-item">
                    <img
                        className="d-block w-100 justify-content-center"
                        src="/homepage-photos/pic5.jpg"
                        alt="Image 5"
                    />
                </Carousel.Item>
                <Carousel.Item className="homepage-carousel-item">
                    <img
                        className="d-block w-100 justify-content-center"
                        src="/homepage-photos/pic6.jpg"
                        alt="Image 6"
                    />
                </Carousel.Item>
            </Carousel>
            <div className="homepage-main-text">
                <h1>HandyHelp</h1>
            </div>
        </div>
    );
}

export default HomePage;