import "react-responsive-carousel/lib/styles/carousel.min.css";

import React from "react";

import { Carousel } from "react-responsive-carousel";

const images = [
  "https://links.papareact.com/gi1",
  "https://links.papareact.com/6ff",
  "https://links.papareact.com/7ma",
];

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        {images.map((image) => (
          <div key={image}>
            <img loading="lazy" src={image} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
