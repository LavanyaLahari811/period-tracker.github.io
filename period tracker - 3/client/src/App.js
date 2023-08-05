import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./routes/auth/auth.component";
import Home from "./routes/home/home.component";
import Navbar from "./routes/navbar/navbar.component";
import Info from "./routes/info/info.component";
import Dashboard from "./routes/dashboard/dashboard.components";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/info" element={<Info/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
