import "./shop_cups.style.scss";
import ShopCard from "../../../components/shop_card/shop_card.components";
import ShopNavbar from "../../shop-navbar/shop-navbar.component";
import { useState } from "react";

const products = [
  {
    brand: "Sirona",
    image: "sirona_cup_image_url",
    name: "Sirona Menstrual Cup",
    size: "Small",
    price: 399,
    other_info: "FDA approved, made of medical-grade silicone",
  },
  {
    brand: "Boondh",
    image: "boondh_cup_image_url",
    name: "Boondh Menstrual Cup",
    size: "Medium",
    price: 350,
    other_info: "Eco-friendly, comes with a storage pouch",
  },
  {
    brand: "SheCup",
    image: "shecup_image_url",
    name: "SheCup Menstrual Cup",
    size: "Large",
    price: 450,
    other_info: "Designed for comfort, BPA-free",
  },
  {
    brand: "StoneSoup",
    image: "stonesoup_cup_image_url",
    name: "StoneSoup Menstrual Cup",
    size: "Small",
    price: 499,
    other_info: "Sustainable and reusable, available in various colors",
  },
  {
    brand: "Everteen",
    image: "everteen_cup_image_url",
    name: "Everteen Menstrual Cup",
    size: "Medium",
    price: 599,
    other_info: "Soft and flexible, comes with a storage pouch",
  },
];

const CupShop = () => {
  const [searchval, setSearchVal] = useState("");
  // const [cart,setCart]=useState("");

  const handleSearch = (value) => {
    setSearchVal(value);
  };

 

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchval.toLowerCase())
  );

  return (
    <div className="shop_cups">
      <ShopNavbar onSearch={handleSearch} />

      <div className="cups">
        {filteredProducts.map((product, index) => (
          <ShopCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};
export default CupShop;
