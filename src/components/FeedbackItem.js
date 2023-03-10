import { FaTimes } from "react-icons/fa";
import Card from "./shared/Card";
const FeedbackItem = ({ rating, text, deleteHandler, id }) => {
  // const { rating, text } = item;
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button className="close" onClick={() => deleteHandler(id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
};

export default FeedbackItem;
