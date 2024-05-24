import React, { useState } from 'react';
import ProfilePic from "../../Assets/john-doe-image.jpg";
import { AiFillStar } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import './ReviewForm.css';

const LeaveReview = () => {
  const [email, setEmail] = useState('');
  const [review, setReview] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(null);
  const [rateColor] = useState(null);

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!email) {
      tempErrors['email'] = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors['email'] = 'Email is not valid';
      isValid = false;
    }

    if (!review) {
      tempErrors['review'] = 'Review is required';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setSubmitted(true);
      console.log('Email:', email);
      console.log('Review:', review);
      alert("Review being created...");
      setTimeout(() => {
        alert("Thank you for your review!");
        window.location.href = '/Reviews';
      }, 1000); // Delay of 1 second (1000 milliseconds)
    }
  };

  return (
    <>
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
        </div>
      </div>
      <div>
        <h2>Leave a Review below!</h2>
        <br></br>
        <br></br>
        <h4>Star Rating/5:</h4>
        <br></br>
        <div className="star-rating">
          {[...Array(5)].map((star, index) => {
            const currentRate = index + 1;
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rate"
                  value={currentRate}
                  onClick={() => setRating(currentRate)}
                />
                <FaStar
                  size={50}
                  color={currentRate <= (rateColor || rating) ? "yellow" : "grey"}
                />
              </label>
        
            );
          })}
        </div>
        <br></br>
        {submitted ? (
          <div>
            <p>Thank you for your review!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email:</label>
              <br />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <br />
              {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>
            <div>
              <label>Review:</label>
              <br />
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                className="review-textarea"
              ></textarea>
              {errors.review && <p style={{ color: 'red' }}>{errors.review}</p>}
            </div>
            <br />
            <button type="submit">Submit</button>
            <br />
            <br />
            <br />
          </form>
        )}
      </div>
    </>
  );
};

export default LeaveReview;
