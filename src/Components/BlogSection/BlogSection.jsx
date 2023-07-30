import React from "react";
import "./BlogSection.css";
import readMore from "../../assets/HomePage/readMore.svg";
import { blogsArr } from "../../Constants/Constants";
import { useNavigate } from "react-router-dom";

const BlogSection = () => {
  const navigate = useNavigate();
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
          {blogsArr.map(({ imgSrc, date, heading, desc }) => (
            <div className="blog ">
              <div className="blog-item">
                <img className="girl" src={imgSrc} alt="girl" />
              </div>
              <div className="blog-item ">
                <p className="date">{date}</p>
                <h2>{heading}</h2>
                <p className="desc">{desc}</p>
                <p
                  style={{ cursor: "pointer" }}
                  className="readMore"
                  onClick={() => navigate("/blogs")}
                >
                  Read More &nbsp;
                  <span className="readMoreIcon">
                    <img src={readMore} alt="icon" />
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
