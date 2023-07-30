import React from "react";
import HeaderBlog from "../Components/HeaderBlog/HeaderBlog";
import Footer from "../Components/Footer/Footer";
import Subscription from "../Components/Subscription/Subscription";
import RecentBlogPostSection from "../Components/RecentBlogPost/RecentBlogPostSection";

const Blogs = () => {
  return (
    <div className="mainWrapper">
      <HeaderBlog />
      <RecentBlogPostSection />
      <Subscription />
      <Footer />
    </div>
  );
};

export default Blogs;
