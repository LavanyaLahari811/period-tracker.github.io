import "./pads.style.scss";
import ShopCard from "../../../components/shop_card/shop_card.components";
import ShopNavbar from "../../shop-navbar/shop-navbar.component";
import { useState } from "react";


const tamponImageUrl = "./tampon.jpg";
const products = [
  {
    brand: "Whisper",
    image: tamponImageUrl,
    name: "Whisper Ultra Soft Regular",
    size: "Regular",
    price: 150,
    other_info: "With wings, 30 pads per pack",
  },
  {
    brand: "Whisper",
    image: "whisper_image_url",
    name: "Whisper Ultra Soft Super",
    size: "Super",
    price: 180,
    other_info: "With wings, 28 pads per pack",
  },
  {
    brand: "Stayfree",
    image: "stayfree_image_url",
    name: "Stayfree Dry Max Super",
    size: "Super",
    price: 120,
    other_info: "Odor control, 32 pads per pack",
  },
  {
    brand: "Stayfree",
    image: "stayfree_image_url",
    name: "Stayfree Dry Max Overnight",
    size: "Overnight",
    price: 140,
    other_info: "Extra long, 28 pads per pack",
  },
  {
    brand: "Sofy",
    image: "sofy_image_url",
    name: "Sofy Side Walls Regular",
    size: "Regular",
    price: 130,
    other_info: "Anti-leakage barriers, 28 pads per pack",
  },
  {
    brand: "Sofy",
    image: "sofy_image_url",
    name: "Sofy Bodyfit Overnight",
    size: "Overnight",
    price: 160,
    other_info: "Extra absorbent, 24 pads per pack",
  },
  {
    brand: "Paree",
    image: "paree_image_url",
    name: "Paree Sanitary Pads Regular",
    size: "Regular",
    price:110,
    other_info: "Soft cover, 36 pads per pack",
  },
  {
    brand: "Paree",
    image: "paree_image_url",
    name: "Paree Comfort Maxi Nights",
    size: "Night",
    price: 130,
    other_info: "Extra long, 32 pads per pack",
  },
  {
    brand: "Vwash",
    image: "vwash_image_url",
    name: "Vwash Wow Ultra Thin Regular",
    size: "Regular",
    price: 180,
    other_info: "Ultra-thin, 24 pads per pack",
  },
  {
    brand: "Vwash",
    image: "vwash_image_url",
    name: "Vwash Wow Ultra Thin XL",
    size: "Extra Large",
    price: 200,
    other_info: "Extra long, 20 pads per pack",
  },
];

const PadsShop = () => {
  const [searchval, setSearchVal] = useState("");

  const handleSearch = (value) => {
    setSearchVal(value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchval.toLowerCase())
  );
  return (
    <div className="shop_pads">
      <ShopNavbar onSearch={handleSearch} />

      <div className="pads">
        {filteredProducts.map((product, index) => (
          <ShopCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PadsShop;
