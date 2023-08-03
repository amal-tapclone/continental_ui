import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./WhyChooseUs.css";
import leftArrow from "../../assets/HomePage/dest_left_arrow.svg";
import rightArrow from "../../assets/HomePage/dest_right_arrow.svg";
import { whyChooseArr } from "../../Constants/Constants";

const WhyChooseUs = () => {
  return (
    <section className="WhyChooseUs testBorder">
      <div className="WhyChooseUs-wrap testBorder ">
        <div className="head-part ">
          <p className="title">Steps to Future </p>
          <h1 className="head">Why Choose Us</h1>
          <p className="desc">
            we present you with a diverse array of top-notch academic
            institutions.
          </p>
        </div>
        <div className="slider-part ">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".choose-button-next1",
              prevEl: ".choose-button-prev1",
              clickable: true,
            }}
            loop={true}
            breakpoints={{
              1024: {
                slidesPerView: 3,
                spaceBetween: 35,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 35,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 35,
              },
            }}
            spaceBetween={15}
            slidesPerView={2}
            centeredSlides={false}
            className="choose-us-slid "
          >
            {whyChooseArr.map(({ img, head, desc }) => (
              <SwiperSlide className="slider-con ">
                <img src={img} alt="calender" />
                <h3>{head}</h3>
                <p>{desc}</p>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="choose-slid-ctrls testBorder">
            <img
              className="choose-button-prev1 "
              src={leftArrow}
              alt="Previous Button"
            />
            <img
              className="choose-button-next1 "
              src={rightArrow}
              alt="Previous Button"
            />
          </div>
          {/* <div className="slider-con ">
            <img src={Message_pers} alt=" chat-bubble" />
            <h3>Overseas Assistance</h3>
            <p>Lorem ipsum dolor sit amet, ctetur adipiscing elit.</p>
          </div>
          <div className="slider-con ">
            <img className="" src={location_pers} alt="location" />
            <h3>Scholarships and Grants</h3>
            <p>Lorem ipsum dolor sit amet, ctetur adipiscing elit.</p>
          </div>
          <div className="slider-con ">
            <img src={calender_pers} alt="calender" />
            <h3>Share your travel preference</h3>
            <p>Lorem ipsum dolor sit amet, ctetur adipiscing elit.</p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
