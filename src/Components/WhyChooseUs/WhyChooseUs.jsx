import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./WhyChooseUs.css";
import Message_pers from "../../assets/HomePage/Message_perspective_matte.png";
import location_pers from "../../assets/HomePage/Location_perspective_matte.png";
import calender_pers from "../../assets/HomePage/Calendar_perspective_matte.png";
import leftArrow from "../../assets/HomePage/dest_left_arrow.svg";
import rightArrow from "../../assets/HomePage/dest_right_arrow.svg";

const WhyChooseUs = () => {
  return (
    <section className="WhyChooseUs">
      <div className="WhyChooseUs-wrap ">
        <div className="head-part ">
          <p className="title">Steps to Future </p>
          <h1 className="head">Why Choose Us</h1>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut.
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
            spaceBetween={35}
            slidesPerView={3}
            centeredSlides={false}
            className="choose-us-slid "
          >
            <SwiperSlide className="slider-con ">
              <img src={Message_pers} alt=" chat-bubble" />
              <h3>Overseas Assistance</h3>
              <p>Lorem ipsum dolor sit amet, ctetur adipiscing elit.</p>
            </SwiperSlide>
            <SwiperSlide className="slider-con ">
              <img className="" src={location_pers} alt="location" />
              <h3>Scholarships and Grants</h3>
              <p>Lorem ipsum dolor sit amet, ctetur adipiscing elit.</p>
            </SwiperSlide>
            <SwiperSlide className="slider-con ">
              <img src={calender_pers} alt="calender" />
              <h3>Share your travel preference</h3>
              <p>Lorem ipsum dolor sit amet, ctetur adipiscing elit.</p>
            </SwiperSlide>
            <SwiperSlide className="slider-con ">
              <img src={Message_pers} alt=" chat-bubble" />
              <h3>Overseas Assistance</h3>
              <p>Lorem ipsum dolor sit amet, ctetur adipiscing elit.</p>
            </SwiperSlide>
            <SwiperSlide className="slider-con ">
              <img className="" src={location_pers} alt="location" />
              <h3>Scholarships and Grants</h3>
              <p>Lorem ipsum dolor sit amet, ctetur adipiscing elit.</p>
            </SwiperSlide>
            <SwiperSlide className="slider-con ">
              <img src={calender_pers} alt="calender" />
              <h3>Share your travel preference</h3>
              <p>Lorem ipsum dolor sit amet, ctetur adipiscing elit.</p>
            </SwiperSlide>
          </Swiper>

          <div className="choose-slid-ctrls ">
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