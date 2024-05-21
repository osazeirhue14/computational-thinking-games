import React from "react";
import ProfilePic from "../../Assets/john-doe-image.jpg";
import { AiFillStar } from "react-icons/ai";
const leavesReview = () => {
  window.location.href=('/LeaveReview');
};

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Reviews</p>
        <h1 className="primary-heading">Users Thoughts</h1>
        <p className="primary-text">
          What do other people think of our games?
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Great games they are all great.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>John Doe</h2>
        <p>Want to leave your review? Please do so by clicking the button below</p>
        <button onClick={leavesReview}>Leave a Review</button>
      </div>
    </div>
  );
};

export default Testimonial;