import "./shop-navbar.styles.scss";
import { useNavigate } from "react-router-dom";

const ShopNavbar = ({ onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };
  const navigate=useNavigate();

  const navigateTo=()=>{
      navigate("/checkout");
  }

  return (
    <div className="shop-navbar">
      <div className="search-bar">
        <input id="search" type="text" placeholder="Search..." onChange={handleChange}/>
      </div>

      <button id="cart" onClick={navigateTo}>Check-Cart</button>

      <img id="user-avatar" src="./user.png" alt="user-avatar" />
    </div>
  );
};

export default ShopNavbar;
