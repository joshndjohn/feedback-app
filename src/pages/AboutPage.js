import { Link } from "react-router-dom";
import React from "react";
import Card from "../components/shared/Card";

const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This app lets users leave feedback for products or services</p>
        <p>Version: 1.0.5</p>

        <p>
          {/* <a href="/">Back To Home</a> */}
          <Link to="/">Back To Home</Link>
        </p>
      </div>
    </Card>
  );
};

export default AboutPage;
