import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

const FeedbackForm = ({ handleAdd }) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [butonDisabled, setButtonDisabled] = useState(true);
  const [message, setMessage] = useState("");

  //   const minlength = () => text.trim().length < 10;

  const handleTextChange = (e) => {
    if (text === "") {
      setButtonDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length < 10) {
      setMessage("Enter a minimum of 10 characters");
      setButtonDisabled(true);
    } else {
      setMessage(null);
      setButtonDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        // text: text,
        // rating: rating,
        text,
        rating,
      };

      //   console.log(newFeedback);
      handleAdd(newFeedback);

      setText("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>What rating is suitable for us?</h2>
        {/* Selection of rating */}
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={butonDisabled}>
            Send
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
