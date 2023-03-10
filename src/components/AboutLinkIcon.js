import { Link } from "react-router-dom";
import { FaQuestion } from "react-icons/fa";

const AboutLinkIcon = () => {
  return (
    <div className="about-link">
      {/* <a href="/about">
        <FaQuestion size={30} />
      </a> */}
      <Link to="/about">
        <FaQuestion size={30} />
      </Link>
      {/* <Link
        to={{
          pathname: "/about",
          search: "?sort=name",
          hash: "#about",
        }}
      > 
        <FaQuestion size={30} />
      </Link> */}
    </div>
  );
};

export default AboutLinkIcon;
