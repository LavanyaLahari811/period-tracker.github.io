import "./shop_card.styles.scss";
import axios from "axios";

const ShopCard = ({ product }) => {
  const products = {
    product_name: product.name,
    product_info: {
      size: product.size,
      price: product.price,
      other_info: product.other_info,
    },
  };

  const addToCheckout = async (event) => {
    event.preventDefault();

    try {
      const id = window.localStorage.getItem("userId");
      await axios.post("http://localhost:3000/main/cartToDb", {
        user_id: id,
        products,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="shopcard">
      <img src={product.image} alt="sanitary napkins"></img>
      <div class="product-name">{product.name}</div>
      <div class="product-info">
        <p>{product.size}</p>
        <p>Rs. {product.price}</p>
        <p>{product.other_info}</p>
      </div>
      <button class="add-to-cart" onClick={addToCheckout}>
        Add to Cart
      </button>
    </div>
  );
};

export default ShopCard;
