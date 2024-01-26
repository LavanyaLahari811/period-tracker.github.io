import "./shop_painkillers.style.scss";
import ShopCard from "../../../components/shop_card/shop_card.components";
import ShopNavbar from "../../shop-navbar/shop-navbar.component";
import { useState } from "react";

const products = [
  {
    brand: "Crocin",
    image: "crocin_image_url",
    name: "Crocin Pain Relief",
    type: "Tablet",
    strength: "500mg",
    price: 50,
    other_info: "Pack of 15 tablets",
  },
  {
    brand: "Saridon",
    image: "saridon_image_url",
    name: "Saridon Advance",
    type: "Tablet",
    strength: "400mg",
    price: 60,
    other_info: "Pack of 10 tablets",
  },
  {
    brand: "Combiflam",
    image: "combiflam_image_url",
    name: "Combiflam Plus",
    type: "Tablet",
    strength: "325mg",
    price: 70,
    other_info: "Pack of 20 tablets",
  },
  {
    brand: "Dolo 650",
    image: "dolo650_image_url",
    name: "Dolo 650",
    type: "Tablet",
    strength: "650mg",
    price: 40,
    other_info: "Pack of 30 tablets",
  },
  {
    brand: "Calpol",
    image: "calpol_image_url",
    name: "Calpol Pain Relief",
    type: "Suspension",
    strength: "120mg/5ml",
    price: 80,
    other_info: "Bottle of 100ml",
  },
  {
    brand: "Meftal Spas",
    image: "meftalspas_image_url",
    name: "Meftal Spas",
    type: "Tablet",
    strength: "250mg",
    price: 55,
    other_info: "Pack of 25 tablets",
  },
  {
    brand: "Ponstan",
    image: "ponstan_image_url",
    name: "Ponstan",
    type: "Capsule",
    strength: "500mg",
    price: 90,
    other_info: "Pack of 12 capsules",
  },
  {
    brand: "Naproxen",
    image: "naproxen_image_url",
    name: "Naproxen",
    type: "Tablet",
    strength: "250mg",
    price:65,
    other_info: "Pack of 15 tablets",
  },
  {
    brand: "Ibugesic",
    image: "ibugesic_image_url",
    name: "Ibugesic Plus",
    type: "Tablet",
    strength: "400mg",
    price: 75,
    other_info: "Pack of 18 tablets",
  },
  {
    brand: "Zerodol",
    image: "zerodol_image_url",
    name: "Zerodol-P",
    type: "Tablet",
    strength: "100mg",
    price: 85,
    other_info: "Pack of 14 tablets",
  },
];

const PainkillerShop = () => {
  const [searchval, setSearchVal] = useState("");
  const handleSearch = (val) => {
    setSearchVal(val);
  };
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchval.toLowerCase())
  );

  return (
    <div className="shop_pain">
      <ShopNavbar onSearch={handleSearch} />

      <div className="pain">
        {filteredProducts.map((product, index) => (
          <ShopCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PainkillerShop;
