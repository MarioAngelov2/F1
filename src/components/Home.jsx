import React, { useState, useRef, useEffect } from "react";
import "../style/Home.css";
import { sliderData } from "../utils/SliderData";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeOutlinedIcon from "@mui/icons-material/NavigateBeforeOutlined";

const Home = () => {
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;
  const timeOut = useRef(null);

  // change the background with setTimeout
  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };

    timeOut.current = setTimeout(nextSlide, 7000);

    return function () {
      if (timeOut.current) {
        clearTimeout(timeOut.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeOut.current) {
      clearTimeout(timeOut.current);
    }

    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    if (timeOut.current) {
      clearTimeout(timeOut.current);
    }

    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // check if the array is empty
  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null;
  }

  return (
    <div className="home-container">
      <div className="content-wrapper">
        {sliderData.map((slide, index) => (
          <div className="content-slide" key={index}>
            {index === current && (
              <>
                <div className="content-slider">
                  <img className="img-slide" src={slide.image} />
                </div>
                <div className="content-info">
                  <h2>Hello</h2>
                </div>
              </>
            )}
          </div>
        ))}
        <div className="arrow-buttons">
          <NavigateBeforeOutlinedIcon
            onClick={prevSlide}
            className="arrow-button"
          />
          <NavigateNextIcon onClick={nextSlide} className="arrow-button" />
        </div>
      </div>
    </div>
  );
};

export default Home;
