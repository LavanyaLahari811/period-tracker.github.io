import "./shop_panty.style.scss";
import ShopCard from "../../../components/shop_card/shop_card.components";
import ShopNavbar from "../../shop-navbar/shop-navbar.component";
import { useState } from "react";

const products = [
  {
    brand: "Adira",
    image: "adira_image_url",
    name: "Adira Period Panty",
    size: "Medium",
    price: 250,
    other_info: "Absorbent, leak-proof, pack of 3",
  },
  {
    brand: "Clovia",
    image: "clovia_image_url",
    name: "Clovia Leak-Proof Hipster Panty",
    size: "Large",
    price: 299,
    other_info: "Comfortable, leak-resistant, pack of 2",
  },
  {
    brand: "Nua",
    image: "nua_image_url",
    name: "Nua Period Panties",
    size: "Small",
    price: 199,
    other_info: "Soft, breathable, pack of 5",
  },
  {
    brand: "Plush",
    image: "plush_image_url",
    name: "Plush Period Underwear",
    size: "XL",
    price: 349,
    other_info: "High absorbency, seamless, pack of 1",
  },
  {
    brand: "LaceAge",
    image: "laceage_image_url",
    name: "LaceAge Menstrual Panty",
    size: "Medium",
    price: 279,
    other_info: "Stylish, leak-proof, pack of 4",
  },
];

const PantyShop = () => {
  const [searchval, setSearchVal] = useState("");

  const handleSearch = (value) => {
    setSearchVal(value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchval.toLowerCase())
  );
  return (
    <div className="shop_panty">
      <ShopNavbar onSearch={handleSearch} />

      <div className="panty">
        {filteredProducts.map((product, index) => (
          <ShopCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PantyShop;
