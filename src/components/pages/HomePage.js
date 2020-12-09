import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import HomeInfo from "../homepage/HomeInfo";

const HomePage = () => {
    return (
        <div style={{ backgroundColor: "#0098ff" }}>
            <Carousel style={{ height: "700px", overflow: "hidden" }}>
                <Carousel.Item className="homepage-carousel-item">
                    <img
                        className="d-block w-100 justify-content-center"
                        src={require("../../homepage-photos/pic1.jpg")}
                        alt="Image 1"
                    />
                </Carousel.Item>
                <Carousel.Item className="homepage-carousel-item">
                    <img
                        className="d-block w-100 justify-content-center"
                        src={require("../../homepage-photos/pic2.jpg")}
                        alt="Image 2"
                    />
                </Carousel.Item>
                <Carousel.Item className="homepage-carousel-item">
                    <img
                        className="d-block w-100 justify-content-center homepage-img-transform"
                        src={require("../../homepage-photos/pic3.jpg")}
                        alt="Image 3"
                    />
                </Carousel.Item>
                <Carousel.Item className="homepage-carousel-item">
                    <img
                        className="d-block w-100 justify-content-center homepage-img-transform"
                        src={require("../../homepage-photos/pic4.jpg")}
                        alt="Image 4"
                    />
                </Carousel.Item>
                <Carousel.Item className="homepage-carousel-item">
                    <img
                        className="d-block w-100 justify-content-center"
                        src={require("../../homepage-photos/pic5.jpg")}
                        alt="Image 5"
                    />
                </Carousel.Item>
                <Carousel.Item className="homepage-carousel-item">
                    <img
                        className="d-block w-100 justify-content-center"
                        src={require("../../homepage-photos/pic6.jpg")}
                        alt="Image 6"
                    />
                </Carousel.Item>
            </Carousel>
            <div style={{ textAlign: "center" }} className="homepage-main-text">
                <h1><b>HandyHelp</b></h1>
                <h3>Share a helping hand</h3>
            </div>
            <HomeInfo />
        </div>
    );
}

export default HomePage;