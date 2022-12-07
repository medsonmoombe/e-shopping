import { useEffect, useState } from "react";
import "./Slider.scss";
import { sliderData } from "./slider-data";
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from "react-icons/fa";
 
const Slider = () => {
  const [currentSlider, setCurrentSlider] = useState(0)
  const slidersLength = sliderData.length;
 
  const nextSlide = () => {
     setCurrentSlider( currentSlider === slidersLength - 1 ? 0 : currentSlider + 1)
  }
   
  const prevSlide = () => {
    setCurrentSlider( currentSlider === 0 ? slidersLength - 1 : currentSlider -1)
  }

  //auto slider

  let timeInterval = 5000;
  let sliderScroll = true;
  let sliderInterval;

  useEffect(()=> {
    setCurrentSlider(0);
  }, [])



  useEffect(()=> {
    if(sliderScroll) {
      const autoScroll = () => {
        sliderInterval = setInterval(nextSlide, timeInterval)
      }
      autoScroll();
    }

    return () => clearInterval(sliderInterval);
  }, [currentSlider, sliderInterval, sliderScroll])

  return (
    <>
      <section className="slider">
        <FaArrowAltCircleLeft className="arrow prev" onClick={prevSlide}/>
        <FaArrowAltCircleRight  className="arrow next" onClick={nextSlide}/>
        {sliderData.map((data, index) => 
          <div key={data.id} className={index === currentSlider ? "slide current" : "slide" }>
            <img className="img" src={data.img} alt="slide" />
            <div className="content">
              <h2 className="">{data.title}</h2>
              <p>{data.desc}</p>
              <a href="/#product" className="show-btn">Shop Now</a>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Slider;
