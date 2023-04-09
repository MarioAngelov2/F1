import React, { useState, useRef, useEffect } from "react";
import "../style/Home.css";
import { sliderData } from "../utils/SliderData";
import { motion } from "framer-motion";

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

    timeOut.current = setTimeout(nextSlide, 5000);

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
                <motion.div className="content-slider">
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="img-slide"
                    src={slide.image}
                  />
                </motion.div>
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
