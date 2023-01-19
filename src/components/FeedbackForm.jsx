import React, { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/Context";
import Rating from "./Rating";
const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [rating, SetRating] = useState(10);
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      text,
      rating,
    };

    if (feedbackEdit.edit === true) {
      updateFeedback(feedbackEdit.item.id, newFeedback);
    } else {
      addFeedback(newFeedback);
    }
    setText("");
  };

  useEffect(() => {
    if (feedbackEdit.edit) {
      setText(feedbackEdit.item.text);
      SetRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <input
          className='form-input'
          type='text'
          placeholder='add feed back'
          onChange={handleInput}
          value={text}
        />
        <button className='form-btn'>add</button>
      </form>
      <Rating select={(selectRating) => SetRating(selectRating)} />
    </div>
  );
};

export default FeedbackForm;
