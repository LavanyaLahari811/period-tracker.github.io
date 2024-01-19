import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./routes/register/register.component";
import Home from "./routes/home/home.component";
import Navbar from "./routes/navbar/navbar.component";
import Info from "./routes/info/info.component";
import Dashboard from "./routes/dashboard/dashboard.components";
import News from "./routes/news/news.component";
import Shop from "./routes/shop/shop.components";
import Login from "./routes/login/login.component";
import PadsShop from "./routes/shopping_routes/shop_pads/pads.route"
import TamponShop from "./routes/shopping_routes/shop_tampons/tampons.route";
import CupShop from "./routes/shopping_routes/shop_cups/shop_cups.route";
import PantyShop from "./routes/shopping_routes/shop_panties/shop_panty.route";
import PainkillerShop from "./routes/shopping_routes/shop_painkillers/shop_painkillers.route";



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/info" element={<Info />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/news" element={<News />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/buy/pads" element={<PadsShop/>}/>
          <Route path="/buy/tampons" element={<TamponShop/>}/>
          <Route path="/buy/cup" element={<CupShop/>}/>
          <Route path="/buy/panty" element={<PantyShop/>}/>
          <Route path="/buy/painkiller" element={<PainkillerShop/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
