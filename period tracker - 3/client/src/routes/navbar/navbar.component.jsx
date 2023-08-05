import "./navbar.styles.scss";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);

  const navigate = useNavigate();
  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userId");
    navigate("/auth");
  };
  return (
    <div className="navbar">
      <Link to={"/"} style={{ color: "black", fontWeight: "500" }}>
        Home
      </Link>

      <Link to={"/info"} style={{ color: "black", fontWeight: "500" }}>
        Info
      </Link>

      {!cookies.access_token ? (
        <Link to={"/auth"} style={{ color: "black", fontWeight: "500" }}>
          Login/Signup
        </Link>
      ) : (
        <div className="dashboard-logout">
          <Link to={"/dashboard"} style={{ color: "black", fontWeight: "500" }}>
            Dashboard
          </Link>

          <button onClick={logout} id="logout_btn">Logout</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
