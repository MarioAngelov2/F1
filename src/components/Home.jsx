import React, { useState, useRef } from "react";
import "../style/Home.css";
import { sliderData } from "../utils/SliderData";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeOutlinedIcon from "@mui/icons-material/NavigateBeforeOutlined";

const Home = () => {
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;
  const timeOut = useRef(null);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

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
