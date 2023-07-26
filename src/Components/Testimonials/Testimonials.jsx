import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import testiIcon from "../../assets/HomePage/testiIcon.svg";
import leftArrow from "../../assets/HomePage/dest_left_arrow.svg";
import rightArrow from "../../assets/HomePage/dest_right_arrow.svg";
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            dictum rhoncus vulputate egestas pretium at. Rhoncus, blandit massa
            dui.
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
            <SwiperSlide className="test-slider-con ">
              <div className="msgSlideWrap">
                <h3>Dream Scholarship</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur elit. Auctor neque sed
                  imperdiet nibh lectus feugiat nunc sem.
                </p>
              </div>
              <img src={testiIcon} alt="avatar" />
              <h4>Jane Cooper</h4>
              <h6>Kochi</h6>
            </SwiperSlide>
            <SwiperSlide className="test-slider-con ">
              <div className="msgSlideWrap">
                <h3>Best Memories</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur elit. Auctor neque sed
                  imperdiet nibh lectus feugiat nunc sem.
                </p>
              </div>
              <img src={testiIcon} alt="avatar" />
              <h4>Sara Lio</h4>
              <h6>Aluva</h6>
            </SwiperSlide>
            <SwiperSlide className="test-slider-con ">
              <div className="msgSlideWrap">
                <h3>Unstoppable</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur elit. Auctor neque sed
                  imperdiet nibh lectus feugiat nunc sem.
                </p>
              </div>
              <img src={testiIcon} alt="avatar" />
              <h4>Jane Cooper</h4>
              <h6>Kannur</h6>
            </SwiperSlide>
            <SwiperSlide className="test-slider-con ">
              <div className="msgSlideWrap">
                <h3>Dream Scholarship</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur elit. Auctor neque sed
                  imperdiet nibh lectus feugiat nunc sem.
                </p>
              </div>
              <img src={testiIcon} alt="avatar" />
              <h4>Jane Cooper</h4>
              <h6>Kochi</h6>
            </SwiperSlide>
            <SwiperSlide className="test-slider-con ">
              <div className="msgSlideWrap">
                <h3>Best Memories</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur elit. Auctor neque sed
                  imperdiet nibh lectus feugiat nunc sem.
                </p>
              </div>
              <img src={testiIcon} alt="avatar" />
              <h4>Sara Lio</h4>
              <h6>Aluva</h6>
            </SwiperSlide>
            <SwiperSlide className="test-slider-con ">
              <div className="msgSlideWrap">
                <h3>Unstoppable</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur elit. Auctor neque sed
                  imperdiet nibh lectus feugiat nunc sem.
                </p>
              </div>
              <img src={testiIcon} alt="avatar" />
              <h4>Jane Cooper</h4>
              <h6>Kannur</h6>
            </SwiperSlide>
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
