import "./card.styles.scss";
import { useNavigate } from "react-router-dom";

const CardComponent = ({name,url,imageUrl}) => {
  const navigate = useNavigate();
  const buyNowClick = () => {
    navigate(url);
  };
  return (
    <div className="card-component">
      <img className="img" src={imageUrl} alt="sanitary napkins"></img>
      <div className="buttons">
        <button id="buy-now" onClick={buyNowClick}>
          {name}
        </button>
        
      </div>
    </div>
  );
};

export default CardComponent;
