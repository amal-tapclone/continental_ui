import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Destination.css";
import canada from "../../assets/HomePage/canada.png";
import new_zealand from "../../assets/HomePage/newZealand.png";
import italy from "../../assets/HomePage/italy.png";
import australia from "../../assets/HomePage/australia.png";
import uk from "../../assets/HomePage/uk.png";
import France from "../../assets/HomePage/france.png";
import spain from "../../assets/HomePage/spain.png";
import malta from "../../assets/HomePage/malta.png";
import germany from "../../assets/HomePage/germany.png";
import leftArrow from "../../assets/HomePage/dest_left_arrow.svg";
import rightArrow from "../../assets/HomePage/dest_right_arrow.svg";
import { useNavigate } from "react-router-dom";

const Destination = () => {
  const countries = [
    { name: "Canada", countryimg: canada },
    { name: "new zealand", countryimg: new_zealand },
    { name: "italy", countryimg: italy },
    { name: "australia", countryimg: australia },
    { name: "uk", countryimg: uk },
    { name: "France", countryimg: France },
    { name: "spain", countryimg: spain },
    { name: "malta", countryimg: malta },
    { name: "germany", countryimg: germany },
  ];

  const navigate = useNavigate();
  return (
    <section className="destination-sec">
      <div className="desti-content ">
        <p className="title">Top Destination</p>
        <h1 className="heading">Your Dream Destination</h1>
      </div>
      <div className="slider-content">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          loop={true}
          modules={[Autoplay, Navigation]}
          spaceBetween={45}
          slidesPerView={3.65}
          centeredSlides={false}
          speed={2000}
          className="destSwiper"
        >
          {countries.map(({ countryimg, name }) => (
            <SwiperSlide className="country-pic">
              <img draggable={false} src={countryimg} />
              <div className="country-name ">
                <h3>{name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="dest-slider-controls">
          <img
            className="swiper-button-prev"
            src={leftArrow}
            alt="Previous Button"
          />
          <img
            className="swiper-button-next"
            src={rightArrow}
            alt="Previous Button"
          />
        </div>

        <button className="migrate-btn" onClick={() => navigate("/migrate")}>
          Migrate
        </button>
      </div>
      <div
        className="blur_circle1"
        style={{
          top: "-25%",
          left: "-6%",
        }}
      ></div>
      <div
        className="blur_circle1"
        style={{
          top: "-38%",
          left: "45%",
          width: "500.099px",
          height: "500.099px",
        }}
      ></div>
    </section>
  );
};

export default Destination;