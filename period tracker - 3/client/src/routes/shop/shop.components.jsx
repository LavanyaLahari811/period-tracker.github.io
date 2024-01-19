import "./shop.styles.scss";

import CardComponent from "../../components/card/card.components";

const Shop = () => {
  const padImageUrl = "./pad.jpg";
  const tamponImageUrl = "./tampon.jpg";

  return (
    <div className="shop">
      <div className="cards">
        <CardComponent name="Pads" url="/buy/pads" imageUrl={padImageUrl} />
        <CardComponent
          name="Tampons"
          url="/buy/tampons"
          imageUrl={tamponImageUrl}
        />
        <CardComponent
          name="Menstrual Cup"
          url="/buy/cup"
          imageUrl={tamponImageUrl}
        />
        <CardComponent
          name="Menstrual Panty"
          url="/buy/panty"
          imageUrl={tamponImageUrl}
        />
        <CardComponent
          name="Pain Killers"
          url="/buy/painkiller"
          imageUrl={tamponImageUrl}
        />
      </div>
    </div>
  );
};

export default Shop;
