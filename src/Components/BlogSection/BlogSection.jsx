import React from "react";
import "./BlogSection.css";
import girl1 from "../../assets/HomePage/girl1-min.png";
import girl2 from "../../assets/HomePage/girl2-min.png";
import girl3 from "../../assets/HomePage/girl3-min.png";
import readMore from "../../assets/HomePage/readMore.svg";

const BlogSection = () => {
  return (
    <section className="blog-section">
      <div className="articles-wrap ">
        <p className="title">New Articles</p>
        <h1>Featured Blog Posts</h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut.
        </p>
        <div className="articles ">
          <div className="blog ">
            <div className="blog-item">
              <img className="girl" src={girl1} alt="girl" />
            </div>
            <div className="blog-item ">
              <p className="date">August 16, 2021</p>
              <h2>How to Find the Best Consultants for Studying in Canada</h2>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                Letus.
              </p>
              <p className="readMore">
                Read More &nbsp;
                <span className="readMoreIcon">
                  <img src={readMore} alt="icon" />
                </span>
              </p>
            </div>
          </div>
          <div className="blog ">
            <div className="blog-item">
              <img className="girl" src={girl2} alt="girl" />
            </div>
            <div className="blog-item ">
              <p className="date">August 16, 2021</p>
              <h2>Things to Know About IELTS Requirements to Study in UK</h2>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                elementum enim netus amet turpis lectus.
              </p>
              <p className="readMore">
                Read More &nbsp;
                <span className="readMoreIcon">
                  <img src={readMore} alt="icon" />
                </span>
              </p>
            </div>
          </div>
          <div className="blog ">
            <div className="blog-item">
              <img className="girl" src={girl3} alt="girl" />
            </div>
            <div className="blog-item ">
              <p className="date">August 16, 2021</p>
              <h2>Dream Universities to study in europe</h2>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                elementum enim netus amet turpis lectus.
              </p>
              <p className="readMore">
                Read More &nbsp;
                <span className="readMoreIcon">
                  <img src={readMore} alt="icon" />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
