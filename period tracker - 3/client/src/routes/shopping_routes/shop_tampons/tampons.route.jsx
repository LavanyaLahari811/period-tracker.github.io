import "./tampons.style.scss";
import ShopCard from "../../../components/shop_card/shop_card.components";
import ShopNavbar from "../../shop-navbar/shop-navbar.component";
import { useState } from "react";

const products=[
    {
      "brand": "Tampax",
      "image": "tampax_image_url",
      "name": "Tampax Pearl Regular",
      "size": "Regular",
      "price": 180,
      "other_info": "Plastic applicator, 36 tampons per box"
    },
    {
      "brand": "OB",
      "image": "ob_image_url",
      "name": "OB Pro Comfort Regular",
      "size": "Regular",
      "price": 150,
      "other_info": "No applicator, 40 tampons per box"
    },
    {
      "brand": "Sirona",
      "image": "sirona_image_url",
      "name": "Sirona Premium Applicator Tampons",
      "size": "Super",
      "price": 200,
      "other_info": "Biodegradable applicator, 32 tampons per box"
    },
    {
      "brand": "Veeda",
      "image": "veeda_image_url",
      "name": "Veeda Natural Cotton Tampons",
      "size": "Regular",
      "price": 160,
      "other_info": "Chemical-free, 30 tampons per box"
    },
    {
      "brand": "Plush",
      "image": "plush_image_url",
      "name": "Plush Ultra Thin Tampons",
      "size": "Regular",
      "price": 190,
      "other_info": "Silky smooth, 28 tampons per box"
    },
    {
      "brand": "Organyc",
      "image": "organyc_image_url",
      "name": "Organyc Organic Cotton Tampons",
      "size": "Super",
      "price": 220,
      "other_info": "Hypoallergenic, 24 tampons per box"
    },
    {
      "brand": "Carmesi",
      "image": "carmesi_image_url",
      "name": "Carmesi Organic Tampons",
      "size": "Regular",
      "price": 180,
      "other_info": "Biodegradable applicator, 32 tampons per box"
    },
    {
      "brand": "Heyday",
      "image": "heyday_image_url",
      "name": "Heyday Compact Applicator Tampons",
      "size": "Regular",
      "price": 210,
      "other_info": "Smooth insertion, 30 tampons per box"
    },
    {
      "brand": "Pee Safe",
      "image": "peesafe_image_url",
      "name": "Pee Safe Organic Cotton Tampons",
      "size": "Super",
      "price": 240,
      "other_info": "Chemical-free, 26 tampons per box"
    },
    {
      "brand": "Lola",
      "image": "lola_image_url",
      "name": "Lola Compact Tampons",
      "size": "Regular",
      "price": 200,
      "other_info": "BPA-free plastic applicator, 28 tampons per box"
    }
  ]
  

const TamponShop=()=>{
    const [searchval,setSearchVal]=useState("");
    
    const handleSearch=(value)=>{
      setSearchVal(value);
    };

    const filteredProducts=products.filter((product)=>
      product.name.toLowerCase().includes(searchval.toLowerCase())
    );

    return(
        <div className="shop_tampons">
      <ShopNavbar onSearch={handleSearch}/>

      <div className="tampons">
        {filteredProducts.map((product, index) => (
          <ShopCard key={index} product={product} />
        ))}
      </div>
    </div>
    )
}
export default TamponShop;