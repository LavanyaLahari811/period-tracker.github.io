import "./home.styles.scss";
import { Link } from "react-router-dom";

const Home = () => {
  const id = localStorage.getItem("userId");
  
  return (
    <div className="home">
      <div className="content">
        <h1>WELCOME...</h1>
        <h3>You can keep track of your periods here!</h3>
        <button >{id ? (
          <Link to={"/dashboard"} style={{ color: "black" }}>
            Go to Dashboard
          </Link>
        ) : (
          <Link to={"/auth"} style={{ color: "black" }}>
            Go to Dashboard
          </Link>
        )}</button>
      </div>
      <div className="img">
        <a href="/">
          <img
            src="https://i.ibb.co/cCMhCJC/10100801-4352299-removebg-preview.png"
            alt="10100801-4352299-removebg-preview"
            border="0"
          />
        </a>
      </div>
    </div>
  );
};
export default Home;
