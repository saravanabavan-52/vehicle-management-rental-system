import { useState } from "react";
import { toast } from "react-toastify";
import "./Reviews.css";

const initialReviews = [
  {
    id: 1,
    vehicle: "Honda City",
    rating: 5,
    comment: "Clean car and smooth pickup. The vehicle was in excellent condition.",
    date: "18 Aug 2026",
  },
  {
    id: 2,
    vehicle: "Maruti Swift",
    rating: 4,
    comment: "Good ride and quick support. Overall, it was a great experience.",
    date: "10 Aug 2026",
  },
];

function Reviews() {
  const [reviews, setReviews] = useState(initialReviews);
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    vehicle: "",
    rating: 5,
    comment: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.vehicle || !form.comment) {
      toast.error("Please enter vehicle and review.");
      return;
    }

    const newReview = {
      id: Date.now(),
      vehicle: form.vehicle,
      rating: Number(form.rating),
      comment: form.comment,
      date: new Date().toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    };

    setReviews([newReview, ...reviews]);

    setForm({
      vehicle: "",
      rating: 5,
      comment: "",
    });

    setShowForm(false);

    toast.success("Review submitted successfully!");
  };

  const averageRating =
    reviews.reduce((total, review) => total + review.rating, 0) /
    reviews.length;

  return (
    <div className="reviews-page">

      {/* HEADER */}
      <div className="reviews-header">

        <div>
          <span className="reviews-badge">
            CUSTOMER REVIEWS
          </span>

          <h1>My Reviews</h1>

          <p>
            Share your experience and view reviews from your completed
            vehicle rentals.
          </p>
        </div>

        <button
          className="write-review-btn"
          onClick={() => setShowForm(!showForm)}
        >
          + Write a Review
        </button>

      </div>

      {/* RATING SUMMARY */}
      <div className="rating-summary">

        <div className="rating-score">

          <strong>
            {averageRating.toFixed(1)}
          </strong>

          <div className="stars">
            {"★★★★★"}
          </div>

          <span>
            Based on {reviews.length} reviews
          </span>

        </div>

        <div className="rating-message">

          <span>YOUR EXPERIENCE MATTERS</span>

          <h2>
            Help other customers choose the right vehicle.
          </h2>

          <p>
            Your honest feedback helps us improve our rental service.
          </p>

        </div>

      </div>

      {/* REVIEW FORM */}
      {showForm && (
        <div className="review-form-card">

          <div className="form-card-header">
            <div>
              <span>NEW REVIEW</span>
              <h2>Share Your Experience</h2>
            </div>

            <button
              className="close-btn"
              onClick={() => setShowForm(false)}
            >
              ×
            </button>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="form-row">

              <div className="review-input">
                <label>Vehicle</label>

                <input
                  type="text"
                  name="vehicle"
                  value={form.vehicle}
                  onChange={handleChange}
                  placeholder="Enter vehicle name"
                />
              </div>

              <div className="review-input">
                <label>Rating</label>

                <select
                  name="rating"
                  value={form.rating}
                  onChange={handleChange}
                >
                  <option value="5">★★★★★ — Excellent</option>
                  <option value="4">★★★★☆ — Good</option>
                  <option value="3">★★★☆☆ — Average</option>
                  <option value="2">★★☆☆☆ — Poor</option>
                  <option value="1">★☆☆☆☆ — Very Poor</option>
                </select>
              </div>

            </div>

            <div className="review-input">

              <label>Your Review</label>

              <textarea
                name="comment"
                value={form.comment}
                onChange={handleChange}
                placeholder="Tell us about your rental experience..."
                rows="4"
              />

            </div>

            <button
              type="submit"
              className="submit-review-btn"
            >
              Submit Review
            </button>

          </form>

        </div>
      )}

      {/* REVIEWS */}
      <div className="reviews-section">

        <div className="reviews-section-header">

          <div>
            <span>YOUR FEEDBACK</span>
            <h2>Recent Reviews</h2>
          </div>

          <strong>
            {reviews.length} Reviews
          </strong>

        </div>

        <div className="reviews-grid">

          {reviews.map((review) => (
            <article
              className="review-card"
              key={review.id}
            >

              <div className="review-card-top">

                <div className="vehicle-icon">
                  🚗
                </div>

                <div className="review-vehicle">

                  <h3>
                    {review.vehicle}
                  </h3>

                  <span>
                    {review.date}
                  </span>

                </div>

                <div className="review-rating">
                  {"★".repeat(review.rating)}
                </div>

              </div>

              <div className="review-line" />

              <p className="review-comment">
                "{review.comment}"
              </p>

              <div className="review-footer">

                <span>
                  ✓ Verified Rental
                </span>

                <button
                  onClick={() =>
                    toast.info("Review editing will be available soon.")
                  }
                >
                  Edit Review
                </button>

              </div>

            </article>
          ))}

        </div>

      </div>

    </div>
  );
}

export default Reviews;