import "./shop-navbar.styles.scss";
import { Link } from "react-router-dom";

const ShopNavbar = ({ onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="shop-navbar">
      <div className="search-bar">
        <input id="search" type="text" placeholder="Search..." onChange={handleChange}/>
      </div>

      <Link to={"/cart"}>
        <img id="cart" src="./Trolley cart.png" alt="cart" />
      </Link>

      <img id="user-avatar" src="./user.png" alt="user-avatar" />
    </div>
  );
};

export default ShopNavbar;
