import "./shop_card.styles.scss";


const ShopCard = ({product}) => {
  const addToCheckout=()=>{
    
  }
  
  return (
    <div className="shopcard">
      
      <img src={product.image} alt="sanitary napkins"></img>
      <div class="product-name">{product.name}</div>
      <div class="product-info">
        <p>{product.size}</p>
        <p>Rs. {product.price}</p>
        <p>{product.other_info}</p>
      </div>
      <button class="add-to-cart" onClick={addToCheckout}>Add to Cart</button>
    </div>
  );
};

export default ShopCard;
