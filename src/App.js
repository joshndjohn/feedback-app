import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import feedbackData from "./data/feedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutLinkIcon from "./components/AboutLinkIcon";

const App = () => {
  const [feedback, setFeedback] = useState(feedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    // console.log("App", id);
    if (window.confirm("Are you sure you want to delete this item?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // return (
  //   <>
  //     <Header />
  //     <div className="container">
  //       <FeedbackForm handleAdd={addFeedback} />
  //       <FeedbackStats feedback={feedback} />
  //       <FeedbackList feedback={feedback} deleteHandler={deleteFeedback} />
  //     </div>
  //   </>
  // );

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  deleteHandler={deleteFeedback}
                />
              </>
            }
          ></Route>

          {/* <Route path="/about">This is the about route</Route> */}
          <Route path="/about" element={<AboutPage />} />
        </Routes>

        <AboutLinkIcon />
      </div>
    </Router>
  );
};

export default App;
