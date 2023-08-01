import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import testiIcon from "../../assets/HomePage/testiIcon.svg";
import leftArrow from "../../assets/HomePage/dest_left_arrow.svg";
import rightArrow from "../../assets/HomePage/dest_right_arrow.svg";
import { testiMonialsArr } from "../../Constants/Constants";
import "swiper/css";
import "swiper/css/navigation";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials-sec ">
      <div className="testimonials-wrap ">
        <div className="test-head-part ">
          <p className="test-title">what they Say </p>
          <h1 className="test-head">Let’s hear from our students</h1>
          <p className="test-desc">
            Discover the real stories and experiences of our vibrant student
            community as they share their journey of growth, challenges
            conquered, and the transformative impact of studying abroad. Find
            inspiration in their voices and be motivated to embark on your own
            unforgettable adventure.
          </p>
        </div>

        <div className="test-slider-part ">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            navigation={{
              nextEl: ".testi-button-next1",
              prevEl: ".testi-button-prev1",
              clickable: true,
            }}
            loop={true}
            speed={2000}
            spaceBetween={35}
            slidesPerView={3}
            centeredSlides={false}
            className="testi-slid"
          >
            {testiMonialsArr.map(
              ({ img, head, description, author, place }) => (
                <SwiperSlide className="test-slider-con ">
                  <div className="msgSlideWrap">
                    <h3>{head}</h3>
                    <p>{description}</p>
                  </div>
                  <img src={img} alt="avatar" />
                  <h4>{author}</h4>
                  <h6>{place}</h6>
                </SwiperSlide>
              )
            )}
          </Swiper>

          <div className="test-slider-controls ">
            <img
              className="testi-button-prev1"
              src={leftArrow}
              alt="Previous Button"
            />
            <img
              className="testi-button-next1"
              src={rightArrow}
              alt="Previous Button"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
